const {db} = require('../config/dbConnection.js');

const getAllPosts = (req,res) => {
    db('posts')
    .select('*')
    .then((posts) => {
        res.json(posts);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

const getPost = (req,res) => {
    const {id} = req.params;
    db('posts')
    .select('*')
    .where({id})
    .then((posts) => {
        if(posts.length === 1){
            res.json(posts[0]);
        } else {
            res.status(404).json({message: 'Post is not found'});
        };
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

const createPost = (req,res) => {
    const {title, content} = req.body;
    db('posts')
    .insert({title,content},['*'])
    .then((posts) => {
        res.json(posts);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

// Data for new post:
// {
// 	"title":"The Full-Stack Developer’s Toolkit",
// 	"content":"Essential Tools and Technologies"
// }

const updatePost = (req,res) => {
    const {id} = req.params;
    const {content} = req.body;
    db('posts')
    .where({id})
    .update({content},['*'])
    .then((posts) => {
        res.json(posts);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });
};

// Data for post (id=2) new title:
// {
//     "content":"How to create a server using Node.js"
// }

const deletePost = (req,res) => {
    const {id} = req.params;
    db('posts')
    .where({id})
    .delete(['*'])
    .then((posts) => {
        res.json(posts);
    })
    .catch((e) => {
        res.status(400).json({message: e});
    });  
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};