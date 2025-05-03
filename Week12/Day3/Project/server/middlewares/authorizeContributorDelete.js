import { getContributorById } from '../models/contributorsModel.js';
import { getStoryById } from '../models/storiesModel.js';

export const authorizeContributorDelete = async (req, res, next) => {
    const { user } = req;
    const { id } = req.params;

    if (!id) return res.status(404).json({ message: "Contributor not found" });

    const contibutor = await getContributorById(id);
    if (!contibutor) return res.status(404).json({ message: "Contributor not found" });

    const storyId = contibutor.story_id;
    const story = await getStoryById(storyId);
    if (story.author_id != user.userId) return res.status(403).json({ message: "Unauthorized to delete contributor" });

    next();
};