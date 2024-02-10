import { UnauthorizedError } from '@/helpers/api-errors'
import { UserRepository } from '../user/user.repository'
import { LoginDto } from './dtos/login.dto'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '@/env'

export class AuthService {
	constructor(private userRepostory: UserRepository) {}

	public async login(data: LoginDto) {
		const user = await this.userRepostory.findByEmail(data.email)

		if (!user) {
			throw new UnauthorizedError('Credentials are invalid')
		}

		const isPasswordValid = await compare(data.password, user.password)

		if (!isPasswordValid) {
			throw new UnauthorizedError('Credentials are invalid')
		}

		const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
			expiresIn: '1d',
		})

		if (!token) throw new UnauthorizedError('Credentials are invalid')

		return token
	}
}
