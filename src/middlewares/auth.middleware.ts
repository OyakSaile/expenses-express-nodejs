import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { env } from '@/env'
import { TokenPayload } from '@/common/models/jwt/jwt.model'

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies.access_token

		if (!token) {
			return res.status(401).json({
				message: 'Token not found',
			})
		}

		jwt.verify(
			token,
			env.JWT_SECRET,
			async (err: unknown, decoded: unknown) => {
				if (err) return res.status(401).send({ message: 'Invalid token!' })

				const tokenPayload = decoded as TokenPayload

				req.user = tokenPayload

				return next()
			}
		)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Internal server error',
		})
	}
}
