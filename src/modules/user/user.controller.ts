import { Request, Response } from "express";
import { UserService } from "./user.service";
export class UserController {
  constructor(private userService: UserService) {}

  async create(request: Request, response: Response) {
    const data = request.body;
    console.log(data);

    await this.userService.create(data);

    response.status(201).json();
  }

  async findByEmail(request: Request, response: Response) {
    const { email } = request.params;

    const user = await this.userService.findByEmail(email);

    response.status(200).json(user);
  }
}
