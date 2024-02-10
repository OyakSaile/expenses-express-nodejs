import { prismaClient } from '../../providers/prisma'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import { UserService } from './user.services'

const userRepository = new UserRepository(prismaClient)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

export { userController, userService, userRepository }
