import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../repository/users.repository.js';
import { HttpError } from '../types/error.js';

export class UserController {
  repository: UsersRepository;

  constructor(repo: UsersRepository) {
    this.repository = repo;
  }

  async contact(req: Request, res: Response, next: NextFunction) {
    console.log('soy el controller');
    console.log(req.body);
    try {
      if (!req.body)
        throw new HttpError(
          411,
          'Length Required',
          'Not received name or mail'
        );
      const sendMail = await this.repository.contact(req.body);
      res.status(201).json(sendMail);
    } catch (error) {
      next(error);
    }
  }
}
