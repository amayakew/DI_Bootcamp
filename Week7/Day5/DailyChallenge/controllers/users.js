import {getUsers, updateUsers} from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const salt = '$2b$10$Kp9V9cI5Lm4vRe2u.LuRtDddzftUw0pDp9mOpw28QOgYS.AYt0Hau';

const removePassword = (user) => {
    delete user.password;
    return user;
};

export const getAllUsers = async (req,res) => {
    const dataFromFile = await getUsers();
    const usersWithoutPassword = dataFromFile.map(u => removePassword(u));
    res.json(usersWithoutPassword);
};

export const getUser = async (req,res) => {
    const {id} = req.params;
    const dataFromFile = await getUsers();
    const user = dataFromFile.find(user => user.id == id);
    if (!user) {
        res.status(404).json({message: 'User is not found'});
        return;
    };
    res.json(removePassword(user));
};

export const updateUser = async (req,res) => {
    const dataFromFile = await getUsers();
    const {id} = req.params;
    const {username} = req.body;
    const user = users.find(user => user.id == id);
    if(!user){
        res.status(404).json({message: 'User is not found'});
        return;
    };
    user.username == username;
    await updateUsers(dataFromFile);
    res.json(removePassword(user));
};

export const userRegistration = async (req,res) => {
    const dataFromFile = await getUsers();
    const id = dataFromFile.length > 0 ? Math.max(dataFromFile.map(u => u.id)) + 1 : 1;
    const {username,password,firstName, lastName, email} = req.body;
    const existingUser = dataFromFile.find(u => u.username == username)

    if (existingUser) {
        return res.status(400).json({message: 'Please select another user name'});
    };

    const hashPassword = await bcrypt.hash(password,salt);
    const newUser = {id,username,password: hashPassword, firstName, lastName, email};
    dataFromFile.push(newUser);
    await updateUsers(dataFromFile);
    res.send(removePassword(newUser));
};

export const userLogIn = async(req,res) => {
    const dataFromFile = await getUsers();
    const {username,password} = req.body;
    const hashPassword = await bcrypt.hash(password,salt);
    const existingUser = dataFromFile.find(u => u.username == username);

    if (!existingUser) {
        return res.status(404).json({message: 'User is not found'});
    };

    const passwordMatch = existingUser.password == hashPassword;

    if (passwordMatch) {
        return res.send(removePassword(existingUser));
    };

    return res.status(401).json({message: 'Incorrect Password'});
};
