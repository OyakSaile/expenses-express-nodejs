import { Router } from 'express'
import { userRouter } from './modules/user/user.route'

const privateRoutes = Router()
const publicRoutes = Router()

privateRoutes.use(userRouter)

const routes = {
	privateRoutes,
	publicRoutes,
}

export default routes
