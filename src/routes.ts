import { Router } from 'express'
import { userRouter } from './modules/user/user.routes'
import { authRoutes } from './modules/auth/auth.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

const privateRoutes = Router()
const publicRoutes = Router()


publicRoutes.use(authRoutes)
privateRoutes.use(userRouter)
publicRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const routes = {
	privateRoutes,
	publicRoutes,
}

export default routes
