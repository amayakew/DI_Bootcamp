import { Router } from 'express';
import { getAllUsers, getUser, updateUser, userLogIn, userRegistration } from '../controllers/users.js';

const router = Router()
export default router;

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.post('/register', userRegistration);
router.post('/login', userLogIn);