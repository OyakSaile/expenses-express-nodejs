import { Router } from 'express'
import { authController } from '.'

export const authRoutes = Router()

authRoutes.post('/auth/login', authController.login.bind(authController))
