import { getStories, createNewStory, getStoryById, updateStory as updateStoryModelFunc, deleteStory as deleteStoryModelFunc } from "../models/storiesModel.js";


export const getAllStories = async (req,res) => {
    
    try {
        const stories = await getStories();
        res.status(200).json({ stories: stories.map((s => ({
            id: s.id,
            title: s.title,
            content: s.content,
            authorId: s.author_id,
            authorName: s.username,
        }))) });
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const createStory = async (req,res) => {
    const {title,content} = req.body;
    const authorId = req.user.userId;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' })
    };

    if (!authorId) {
        return res.status(400).json({message: 'Author ID is missing or invalid.'})
    };

    try {
        const story = await createNewStory(title,content,authorId);
        res.status(201).json({message: 'New story was successfully added', story})
    } catch (e) {
        console.log((e));
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const updateStory = async (req,res) => {
    const storyId = req.params.id;

    const story = await getStoryById(storyId)
    if (!story) {
        res.status(404).json({ message: 'No stories found' });
        return;
    };

    const {title, content} = req.body;

    try {
        const story = await updateStoryModelFunc(title, content, storyId);
        res.status(200).json({message: `Story with id ${storyId} was successfully updated`, story})
    } catch (e) {
        console.log((e));
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const deleteStory = async(req,res) => {
    const storyId = req.params.id;
    const story = await getStoryById(storyId)
    if (!story) {
        res.status(404).json({ message: 'No stories found' });
        return;
    };

    try {
        const story = await deleteStoryModelFunc(storyId);
        res.status(200).json({message: `Story with id ${storyId} was successfully deleted`, story})
    } catch (e) {
        console.log((e));
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};