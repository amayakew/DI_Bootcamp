const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGeneration = (user) => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

    //generate token
    const accessToken = jwt.sign(
        {
            userid: user.id,
            email: user.email,
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
    );
    return accessToken;
};

const refreshJwtGeneration = (user) => {
    const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

    //generate token
    const accessToken = jwt.sign(
        {
            userid: user.id,
            email: user.email,
            isRefresh: true
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
    );
    return accessToken;
};


module.exports = {
    registerUser: async(req,res) => {
        const {password, email} = req.body;

        try {
            const user = await userModel.createUser(password,email);
            const accessToken = jwtGeneration(user);
            const refreshToken = refreshJwtGeneration(user);

            res.cookie('token',accessToken, {
                maxAge: 3600 * 1000,
                httpOnly: true,
            });

            //set token on httpOnly cookie
            res.cookie('refresh-token',accessToken, {
                maxAge: 24 * 3600 * 1000,
                httpOnly: true,
                //here can be secure
            });

            res.status(201).json({
                message: 'User registered successfully',
                user,
                accessToken,
                refreshToken
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'});
        }
    },
    loginUsers: async (req,res) => {
        const {email, password} = req.body;

        try {
            const user = await userModel.getUserByEmail(email);
            if(!user){
                res.status(404).json({message: 'User not found'});
                return;
            }
            const match = await bcrypt.compare(password+'', user.password)
            if (!match) {
                res.status(404).json({message: 'Wrong password'});
                return;   
            };

            const accessToken = jwtGeneration(user);
            const refreshToken = refreshJwtGeneration(user);
            
            //set token on httpOnly cookie
            res.cookie('token',accessToken, {
                maxAge: 3600 * 1000,
                httpOnly: true,
                //here can be secure
            });

            //set token on httpOnly cookie
            res.cookie('refresh-token',accessToken, {
                maxAge: 24 * 3600 * 1000,
                httpOnly: true,
                //here can be secure
            });

            // response to the user with token
            res.status(200).json({
                message: 'Login successfully', 
                user: {userid: user.id, email: user.email, active: !!user},
                accessToken,
                refreshToken,
            });

        }catch(error){
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.getUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    },
    logoutUser: (req,res) => {
        res.clearCookie('token');
        req.cookies['token'] = null;
        delete req.cookies['token'];
        req.user = null;
        res.sendStatus(200);
    },
    verifyAuth: (req,res) => {
        const {id, email} = req.user;
        const {ACCESS_TOKEN_SECRET} = process.env;
        
        const newToken = jwt.sign({id,email}, ACCESS_TOKEN_SECRET, { expiresIn: '1h'});

        res.cookie('token', newToken,{
            maxAge: 3600*1000,
            httpOnly: true,
        });

        res.status(200).json({message: 'new token', user: {id,email}, newToken});
    },
    refreshToken: (req, res) => {
        const refreshToken = req.cookies['refresh-token'];
        jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
            if(err){
                res.status(403).json({message: 'Forbidden user'});
                return;
            }
            console.log(decoded);
            const accessToken = jwtGeneration(decoded);
            res.cookie('token', accessToken,{
                maxAge: 3600*1000,
                httpOnly: true,
            });
            res.status(200).json({message: 'new token', user: {id: decoded.id, email: decoded.email}, accessToken});
        });

    }
};