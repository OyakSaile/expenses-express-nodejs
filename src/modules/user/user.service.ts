import { randomUUID } from "crypto";
import { CreateUserDTO } from "./dtos/createUser.dto";
import { User } from "./dtos/user.dto";
import { IUserRepository } from "./repositories/IUserRepository";
import { BadRequestError, NotFoundError } from "@/helpers/api-errors";
import { hash } from "bcrypt";
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async create(data: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new BadRequestError("User already exists");
    }

    await this.userRepository.create({
      email: data.email,
      name: data.name,
      password: await hash(data.password, 12),
      id: randomUUID(),
    });
  }

  async findByEmail(email: string): Promise<Omit<User, "password">> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      email: user.email,
      id: user.id,
      name: user.name,
    };
  }
}
