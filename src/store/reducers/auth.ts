import * as actions from '../actions/auth';
import { IUser } from '../../models/user';

export interface State {
  user: IUser | null;
}

const initialState: State = {
  user: null,
};

export const reducer = (state: State = initialState, action: actions.AuthTypes): State => {
  switch (action.type) {
    case actions.AUTH_LOGOUT:
      return { ...state, user: null };
    case actions.AUTH_LOGIN:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
