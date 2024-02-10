import { Request, Response } from "express";
import { UserService } from "./user.service";
export class UserController {
  constructor(private userService: UserService) {}
  async create(request: Request, response: Response) {
    this.userService.create(request.body);
  }
}
