import { Store } from '../base';
import { UserSession } from '../entities';
import { UserRepository } from '../infrastructure';
import { UserFacade } from './user.facade';

export interface UserState {
  user: UserSession | null;
}

const initialState: UserState = {
  user: null,
};

export class UserFacadeImpl extends Store<UserState> implements UserFacade {
  user$ = this.select((state) => state.user);

  constructor(private userRepository: UserRepository) {
    super(initialState);
  }

  loadUsers() {
    this.userRepository
      .getUser()
      .subscribe((userSession) => this.setUser(userSession));
  }

  setUser(user: UserSession) {
    this.setState({ user });
  }
}
