import React from 'react';
import Input from '../../ui/Input/Input';
import Nav from '../../ui/Nav/Nav';
import AuthSvg from '../../ui/svg/AuthSvg/AuthSvg';

import classes from './Register.module.scss';

interface Props {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly usernameChangeHandler: (value: string) => void;
  readonly emailChangeHandler: (value: string) => void;
  readonly passwordChangeHandler: (value: string) => void;
  readonly submitHandler: (e: React.FormEvent) => void;
}

const RegisterView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {

  return (
    <div className={classes['container']}>
      <div className={classes['svgContainer']}>
        <AuthSvg />
      </div>
      <div className={classes['formContainer']}>
        <form className={classes['form']} onSubmit={props.submitHandler}>
          <h1 className={classes['form__header']}>Join our website</h1>
          <Input
            placeholder='Username'
            value={props.username}
            changeHandler={props.usernameChangeHandler}
          />
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
          <div className="btnwrapper">
            <button
              className={classes['form__button']}
              type='submit'>
              Register
            </button>  
          </div>
          
        </form>
      </div>
      {/* <span className={classes['text']}>Already have an account? <a>Click Here</a></span> */}
    </div>
  );
};

RegisterView.displayName = 'RegisterView';
RegisterView.defaultProps = {};

export default RegisterView;
