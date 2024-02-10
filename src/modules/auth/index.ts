import { prismaClient } from '@/providers/prisma'
import { UserRepository } from '../user/user.repository'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.services'

const userRepository = new UserRepository(prismaClient)
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)

export { authController }
