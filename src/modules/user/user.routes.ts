import { Router } from 'express'
import { userController } from '.'
import { authMiddleware } from '@/middlewares/auth.middleware'

export const userRouter = Router()

userRouter.get('/user/:email', authMiddleware ,userController.findByEmail.bind(userController))
userRouter.post('/user/', userController.create.bind(userController))
