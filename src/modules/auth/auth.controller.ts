import { Request, Response } from 'express'
import { AuthService } from './auth.services'

export class AuthController {
	constructor(private authService: AuthService) {}

	async login(request: Request, response: Response) {
		const { email, password } = request.body

		const access_token = await this.authService.login({ email, password })

		if (!access_token) {
			response.status(401).json({ message: 'Credentials are invalid' })
		}

		response.cookie('access_token', access_token, { httpOnly: true })
		response.status(201).json({
			access_token,
		})
	}
}
