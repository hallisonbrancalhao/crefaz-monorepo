import {HttpRepositoryImpl} from './http.repository'
import {User} from '../entities'

export class UserRepositoryImpl extends HttpRepositoryImpl<User> {}
