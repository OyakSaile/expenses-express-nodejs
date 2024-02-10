import { CreateUserDTO } from "./dtos/createUser.dto";
import { IUserRepository } from "./repositories/IUserRepository";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async create(data: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    await this.userRepository.create({
      ...data,
      id: "1234-5678-9012-3456",
    });
  }
}
