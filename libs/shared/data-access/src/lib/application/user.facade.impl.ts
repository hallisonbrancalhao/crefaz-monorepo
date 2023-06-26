import { Store } from '../base';
import { UserFacade } from './user.facade';
import { UserSession } from '../entities';
import { UserRepository } from '../infrastructure';

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
