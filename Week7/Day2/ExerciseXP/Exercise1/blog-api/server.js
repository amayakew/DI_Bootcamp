// In server.js, require the express package and set up an Express app.
// Create a data array to simulate a database. Each item in the array should represent 
// a blog post with properties like id, title, and content.

// Implement error handling for invalid routes and server errors.

const express = require('express');
const app = express();

const data = [
	{id:1,title:'How to choose IT career',content:'IT career paths'},
	{id:2,title:'Create your first HTTP Server',content:'How to create a basic HTTP server using Node.js'},
	{id:3,title:'Does the perfect CV exist?',content:'How a CV should be written'}
];

// Start the Express app and listen on a specified port (e.g., 3000).
const PORT = 3000;
app.listen(PORT,() => {
	console.log(`run on ${PORT}`);
});

// GET /posts: Return a list of all blog posts.
app.get('/api/posts', (req,res) => {
	res.send(data);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/api/posts/:id', (req,res) => {
	const {id} = req.params;
	const post = data.find(post => post.id == id);
	if (!post){
        return res.sendStatus(404);
	};
	res.json(post);   
});

// POST /posts: Create a new blog post.
app.use(express.json());

app.post('/api/posts', (req,res) => {
    const {title,content} = req.body;
    const newPost = {id: data.length + 1,title,content};
    data.push(newPost);
    res.json(data);
});

// Data for new post:
// {
// 	"title":"The Full-Stack Developer’s Toolkit",
// 	"content":"Essential Tools and Technologies"
// }

// PUT /posts/:id: Update an existing blog post.
app.put('/api/posts/:id', (req,res) => {
    const {id} = req.params;
    const {title} = req.body;
    const index = data.findIndex(i => i.id == id);
    
    if (index === -1) {
    return res.sendStatus(404);
    };

    data[index] = {...data[index],title};
    res.json(data);    
});

// Data for post (id=4) new title:
// {
//     "title":"The Full-Stack Developer’s Toolkit: PostgreSQL, Node.js, React and others"
// }

// DELETE /posts/:id: Delete a blog post.
app.delete('/api/posts/:id',(req,res) => {  
    const {id} = req.params;
    const index = data.findIndex(i => i.id == id);

    if (index === -1) {
        return res.sendStatus(404);
        };

    data.splice(index,1);
    res.json(data);
});
