import { Router } from "express";
import { loginUser, registerUser, refreshAccessToken } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/refreshToken', refreshAccessToken);

export default authRouter;