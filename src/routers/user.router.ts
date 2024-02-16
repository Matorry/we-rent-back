import { Router as createRouter } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { UsersRepository } from '../repository/users.repository.js';

const repository = new UsersRepository();
const userController = new UserController(repository);
export const userRouter = createRouter();

userRouter.post('/contact', userController.contact.bind(userController));
