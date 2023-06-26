import { UserSession } from '../entities';
import { Observable } from 'rxjs';

export abstract class UserFacade {
  abstract user$: Observable<UserSession | null>;

  abstract loadUsers(): void;
  abstract setUser(user: UserSession): void;
}
