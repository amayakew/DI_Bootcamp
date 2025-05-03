import { Router } from "express";
import { createStory, deleteStory, getAllStories, updateStory } from "../controllers/storiesController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
import { authorizeStoryEdit, authorizeStoryDelete } from "../middlewares/authorizeStoryActions.js";


const storiesRouter = Router();

storiesRouter.get('/stories', authenticateToken, getAllStories);
storiesRouter.post('/stories', authenticateToken, createStory);
storiesRouter.patch('/stories/:id', authenticateToken, authorizeStoryEdit, updateStory);
storiesRouter.delete('/stories/:id', authenticateToken, authorizeStoryDelete, deleteStory);

export default storiesRouter;