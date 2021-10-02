import { IUser } from '../../models/user';

export const AUTH_LOGOUT = '[Auth] Logout';
export const AUTH_LOGIN = '[Auth] Login';

// --- Interface --- //

export interface Logout {
  type: typeof AUTH_LOGOUT;
}

export interface Login {
  type: typeof AUTH_LOGIN;
  payload: { user: IUser };
}

// --- Action creators --- //

export const logout = (): Logout => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const login = (user: IUser): Login => {
  return {
    type: AUTH_LOGIN,
    payload: { user },
  };
};

export type AuthTypes = Logout | Login;
