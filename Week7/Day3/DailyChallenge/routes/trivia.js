import {Router} from 'express';
import {startGame, submitAnswer, displayScore} from '../controllers/trivia.js';

export const router = Router();

router.get('/', startGame);
router.post('/', submitAnswer);
router.get('/score', displayScore);