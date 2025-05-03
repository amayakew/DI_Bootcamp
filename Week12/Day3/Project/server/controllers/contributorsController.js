import { addContributor, getStoryContributors, deleteContributor } from "../models/contributorsModel.js";

export const addNewContributor = async (req,res) => {
    const {user_id, story_id} = req.body;


    if (!user_id || !story_id) {
        return res.status(400).json({ message: 'User and story IDs are required.' })
    };

    try {
        const story = await getStoryById(story_id);

        if (!story) {
            res.status(404).json({message: 'Story doesn\'t exist'});
            return;
        };

        const contributor = await addContributor(user_id,story_id);
        res.status(201).json({message: 'New contributor is added successfully', contributor})
    } catch (e) {
        console.log((e));
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const getAllContributorsForStory = async (req,res) => {
    const {story_id} = req.params;
    
    try {
        const contributors = await getStoryContributors(story_id);
        res.status(200).json({ contributors: contributors.map(c => ({
            userId: c.user_id,
            username: c.username
        })) });
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};

export const deleteStoryContributor = async(req,res) => {
    const id = req.params.id;

    try {
        const contributor = await deleteContributor(id);
        res.status(200).json({message: `Contributor with id ${storyId} is successfully deleted`, contributor})
    } catch (e) {
        console.log((e));
        res.status(500).json({message: 'Server error, please try again later.'})
    }
};