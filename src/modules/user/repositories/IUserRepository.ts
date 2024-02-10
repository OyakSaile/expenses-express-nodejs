import { User } from '@/common/models/user/user.model'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<void>;
}
