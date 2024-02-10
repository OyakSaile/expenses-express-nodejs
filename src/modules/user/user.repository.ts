import { PrismaClient } from '@prisma/client'
import { IUserRepository } from './repositories/IUserRepository'
import { User } from '@/common/models/user/user.model'

export class UserRepository implements IUserRepository {
	constructor(private database: PrismaClient) {}
	findByEmail(email: string): Promise<User | null> {
		return this.database.user.findUnique({ where: { email } })
	}

	async create(data: User) {
		await this.database.user.create({ data })
	}
}
