import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import * as authActions from '../../../store/actions/auth';
import { backendAPIAxios } from '../../../utils/http';
import { IUser } from '../../../models/user';

import { ILoginResponse } from '../../../models/response/user';

import icons from '../../../assets/icons';

import WelcomeView from './Welcome.view';

interface PropsFromDispatch {
  login: (user: IUser) => authActions.Login;
}

interface Props extends PropsFromDispatch { 
  readonly iconName: keyof typeof icons;
}

const About: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ emailState, setEmailState ] = useState<string>('');
  const [ usernameState, setUsernameState ] = useState<string>('');
  const [ passwordState, setPasswordState ] = useState<string>('');

  const emailChangeHandler = (value: string) => setEmailState(() => value);

  const usernameChangeHandler = (value: string) => setUsernameState(() => value);

  const passwordChangeHandler = (value: string) => setPasswordState(() => value);

  return (
    <WelcomeView
      iconName={props.iconName}
      email={emailState}
      username={usernameState}
      password={passwordState}
      usernameChangeHandler={usernameChangeHandler}
      emailChangeHandler={emailChangeHandler}
      passwordChangeHandler={passwordChangeHandler}
    >{props.children}</WelcomeView>
  );
};

About.displayName = 'About';
About.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<authActions.AuthTypes>): PropsFromDispatch => {
  return {
    login: (user: IUser): authActions.Login => dispatch(authActions.login(user)),
  };
};

export default connect(null, mapDispatchToProps)(About);
