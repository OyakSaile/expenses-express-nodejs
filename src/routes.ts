import { Router } from 'express'
import { userRouter } from './modules/user/user.routes'
import { authRoutes } from './modules/auth/auth.routes'
import { authMiddleware } from './middlewares/auth.middleware'

const privateRoutes = Router()
const publicRoutes = Router()


privateRoutes.use(authMiddleware)
publicRoutes.use(authRoutes)
privateRoutes.use(userRouter)

const routes = {
	privateRoutes,
	publicRoutes,
}

export default routes
