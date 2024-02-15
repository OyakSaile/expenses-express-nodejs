import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import { env } from './env'
import { errorMiddleware } from './middlewares/error.middleware'
import cookieParser from 'cookie-parser'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
const app = express()



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(routes.publicRoutes)
app.use(routes.privateRoutes)


//Middlewares
app.use(errorMiddleware)

app.listen(env.PORT, () => {
	console.log(`Server is running on port ${env.PORT}`)
})
