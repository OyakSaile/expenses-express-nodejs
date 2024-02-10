import { TokenPayload } from '@/common/models/jwt/jwt.model'

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayload
    }
  }
}