import { UserSession } from '../entities';
import { Observable } from 'rxjs';

export abstract class UserRepository {
  abstract getUser(): Observable<UserSession>;
}
