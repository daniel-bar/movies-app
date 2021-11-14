import { Link } from 'react-router-dom';
import React from 'react';

import Input from '../../ui/Input/Input';
import MSvg from '../../ui/MSvg/MSvg';

import icons from '../../../assets/icons';

import classes from './Login.module.scss';

interface Props {
  readonly iconName: keyof typeof icons;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly usernameChangeHandler: (value: string) => void;
  readonly emailChangeHandler: (value: string) => void;
  readonly passwordChangeHandler: (value: string) => void;
  readonly submitHandler: (e: React.FormEvent) => void;
}

const LoginView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={classes['outerContainer']}>
      <div className={classes['innerContainer']}>
        <MSvg
          name='auth'
          className={classes['svgContainer']} 
        />
        <div className={classes['formContainer']}>
          <form className={classes['form']} onSubmit={props.submitHandler}>
            <h1 className={classes['form__header']}>Welcome Back!</h1>
            <Input
              placeholder='Email'
              value={props.email}
              changeHandler={props.emailChangeHandler}
            />
            <Input
              placeholder='Password'
              value={props.password}
              changeHandler={props.passwordChangeHandler}
            />
            <button
              className={classes['form__button']}
              type='submit'>
              Login
            </button>  
          </form>
        </div>
      </div>
      <div className={classes['spanContainer']}>
        <span 
          className={classes['text']}>
          Don't have an account? 
          <Link to={'/register'}>Click Here</Link>
        </span>
      </div>
    </div>
  );
};

LoginView.displayName = 'LoginView';
LoginView.defaultProps = {};

export default LoginView;
