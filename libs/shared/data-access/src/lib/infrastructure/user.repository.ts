import {Repository} from '../base'
import {User} from '../entities'

export abstract class UserRepository extends Repository<User> {}
