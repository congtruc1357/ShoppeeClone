import type { user } from './user.type'
import type { ErrorResponseApi } from './utils.type'

export type AuthResponse = ErrorResponseApi<{
  access_token: string
  expires: string
  user: user
}>
