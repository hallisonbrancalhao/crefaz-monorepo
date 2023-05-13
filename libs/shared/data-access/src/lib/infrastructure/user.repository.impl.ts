import { Http } from '../base';
import { UserSession } from '../entities';
import { UserRepository } from './user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(private http: Http<UserSession>, private endpoint: string) {}

  getUser() {
    return this.http.get<UserSession>(this.endpoint);
  }
}
