import { Router } from "express";
import { addNewContributor, getAllContributorsForStory, deleteStoryContributor } from "../controllers/contributorsController.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";
import { authorizeContributorDelete } from '../middlewares/authorizeContributorDelete.js';

const contributorsRouter = Router();

contributorsRouter.post('/contributors', authenticateToken, addNewContributor);
contributorsRouter.get('/contributors/:story_id', authenticateToken, getAllContributorsForStory);
contributorsRouter.delete('/contributors/:id', authenticateToken, authorizeContributorDelete,  deleteStoryContributor);

export default contributorsRouter;