const {users} = require('../config/usersDB.js');
const bcrypt = require('bcrypt');
const {nanoid} = require('nanoid');

module.exports = {
    createUser: async(password,email) => {
        try {
            const hashPassword = await bcrypt.hash(password+'', 10);
            const user = {
                id: nanoid(),
                email: email.toLowerCase(),
                password: hashPassword,
            };
            users.push(user);
            return {id: user.id, email: user.email};

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getUserByEmail: async(email) => {
        try {
            const user = users.find(user => user.email == email.toLowerCase());
            return user;

        }catch(error){
            throw error;
        }
    },
    getUsers: async () => {
        try{
            return users.map(user => ({
                id: user.id,
                email: user.email,
            }));
        } catch (error) {
            throw error;
        }
    },
};