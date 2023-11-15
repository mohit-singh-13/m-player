import express from 'express';
import { userController } from '../controllers/user-controller.js';

export const userRoutes = express.Router();

userRoutes.post('/login', userController.login);
userRoutes.post('/register', userController.register);