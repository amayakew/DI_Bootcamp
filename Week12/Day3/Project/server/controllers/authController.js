import {createUser, getUserByEmail} from '../models/usersModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registerUser = async (req,res) => {
    const {username,email,password} = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email and password are required." })
    };

    try {
        const user = await createUser(username,email,password);
        res.status(201).json({message: 'User registered successfully', user})
    } catch (e) {
        console.log((e));
        if(e.code === '23505'){
            res.status(409).json({message: 'User already exists'});
            return;
        }
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const loginUser = async(req,res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." })
    };

    try {
        const user = await getUserByEmail(email);
        if(!user) {
            res.status(404).json({message: 'User is not found'});
            return;  
        };

        const isMatch = await bcrypt.compare(password + '', user.password_hash);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials." });
            return;
        };

        const JWT_SECRET = process.env.JWT_SECRET;
        const REFRESH_SECRET = process.env.REFRESH_SECRET;

        const accessToken = jwt.sign(
            {
                userId: user.id,
                userName: user.username,
                email: user.email,
            },
            JWT_SECRET,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { 
                userId: user.id,
                username: user.username,
                email: user.email
            },
            REFRESH_SECRET,
            { expiresIn: "7d" },
        )

        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false, sameSite: false });
        res.json({ token: accessToken, user: {
            userId: user.id,
            username: user.username,
            email: user.email
        } });

    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'Server error, please try again later.'});
    }
};

export const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies?.refreshToken

    if (!refreshToken) return res.sendStatus(403);
    
    const REFRESH_SECRET = process.env.REFRESH_SECRET;
    const JWT_SECRET = process.env.JWT_SECRET;

    jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const newAccessToken = jwt.sign(
        { 
            userId: user.id,
            username: user.username,
            email: user.email, 
        },
        JWT_SECRET,
        { expiresIn: "15m" },
        );
        res.json({ token: newAccessToken, user: {
            userId: user.id,
            username: user.username,
            email: user.email
        } });
    });
};