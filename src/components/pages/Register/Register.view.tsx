import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../ui/Input/Input';
import MSvg from '../../ui/MSvg/MSvg';

import icons from '../../../../src/assets/icons';

import classes from './Register.module.scss';

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

const RegisterView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={classes['outerContainer']}>
      <div className={classes['innerContainer']}>
        <MSvg
          name='auth'
          className={classes['svgContainer']} 
        />
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
            <button
              className={classes['form__button']}
              type='submit'>
              Register
            </button>  
          </form>
        </div>
      </div>
      <div className={classes['spanContainer']}>
        <span 
          className={classes['text']}>
          Already have an account? 
          <Link to={'/login'}>Click Here</Link></span>
      </div>
    </div>
  );
};

RegisterView.displayName = 'RegisterView';
RegisterView.defaultProps = {};

export default RegisterView;
