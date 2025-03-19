import {db} from '../config/dbConnection.js';
import bcrypt from 'bcryptjs';

const salt = '$2b$10$Kp9V9cI5Lm4vRe2u.LuRtDddzftUw0pDp9mOpw28QOgYS.AYt0Hau';

export const getAllUsers = (req,res) => {
    db('users')
    .select('*')
    .then((users) => {
        res.json(users);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};
export const getUser = (req,res) => {
    const {id} = req.params;
    db('users')
    .where({id})
    .select('*')
    .then((users) => {
        if(users.length === 1){
            res.json(users[0]);
        } else {
            res.status(404).json({message: 'User is not found'});
        };
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};
export const updateUser = (req,res) => {
    const {id} = req.params;
    const {username} = req.body;
    db('users')
    .where({id})
    .update({username},['*'])
    .then((users) => {
        res.json(users);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};
export const userRegistration = async (req,res) => {
    const {username,password} = req.body;
    const trx = await db.transaction();
    try {
        const hashPassword = await bcrypt.hash(password,salt);
        const [user] = await db('users')
        .insert({username}, ['*'])
        .transacting(trx)
    
        await db('hashpwd')
        .insert({username,password: hashPassword}, ['*'])
        .transacting(trx)
    
        await trx.commit();
        res.json(user);
    } catch (e) {
        res.status(400).json({message: e});
        await trx.rollback();
    };

};
export const userLogIn = async (req,res) => {
    const {username,password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password,salt);
        console.log(`password: ${hashPassword}`)
        const users = await db('hashpwd')
        .where({username, password: hashPassword})
        .select('*')
        if(users.length === 1){
            const userDetails = await db('users')
            .where({username})
            .select('*')
            res.json(userDetails[0]);
        } else {
            res.status(401).json({message: 'Unauthorized'});
        };
    } catch (e) {
        res.status(400).json({message: e});
    };
};