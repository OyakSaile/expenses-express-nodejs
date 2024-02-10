import { User } from "./dtos/user.dto";
import { IUserRepository } from "./repositories/IUserRepository";

export class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  create(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
