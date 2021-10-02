import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import * as authActions from '../../../store/actions/auth';
import { backendAPIAxios } from '../../../utils/http';
import { IUser } from '../../../models/user';

import { IRegisterResponse } from '../../../models/response/user';

import RegisterView from './Register.view';

interface PropsFromDispatch {
  login: (user: IUser) => authActions.Login;
}

interface Props extends PropsFromDispatch { }

const Register: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ emailState, setEmailState ] = useState<string>('');
  const [ usernameState, setUsernameState ] = useState<string>('');
  const [ passwordState, setPasswordState ] = useState<string>('');

  const emailChangeHandler = (value: string) => setEmailState(() => value);

  const usernameChangeHandler = (value: string) => setUsernameState(() => value);

  const passwordChangeHandler = (value: string) => setPasswordState(() => value);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const registrationData = {
      username: usernameState,
      email: emailState,
    };

    backendAPIAxios.post('/register', {
      ...registrationData,
      password: passwordState,
    }).then((response: AxiosResponse<IRegisterResponse>) => {
      sessionStorage.setItem('token', response.data.data!.token);
      props.login(registrationData);
    });
  };

  return (
    <RegisterView
      email={emailState}
      username={usernameState}
      password={passwordState}
      usernameChangeHandler={usernameChangeHandler}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
      submitHandler={submitHandler}
    >{props.children}</RegisterView>
  );
};

Register.displayName = 'Register';
Register.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<authActions.AuthTypes>): PropsFromDispatch => {
  return {
    login: (user: IUser): authActions.Login => dispatch(authActions.login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
