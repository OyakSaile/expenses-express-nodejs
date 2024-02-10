import { CreateUserDTO } from "../dtos/createUser.dto";
import { User } from "../dtos/user.dto";

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<void>;
}
