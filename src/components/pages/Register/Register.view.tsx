import React from 'react';
import RegisterSvg from '../../ui/RegisterSvg/RegisterSvg';

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
    <main className={classes['container']}>
      <div className={classes['svgContainer']}>
        <RegisterSvg />
      </div>
      <div className={classes['formContainer']}>
        <form className={classes['form']} onSubmit={props.submitHandler}>
          <h1 className={classes['form__header']}>Join our website</h1>
          <input
            className={classes['form__input']}
            placeholder='Username'
            // value={'props.username'}
            type='text'
            // changeHandler={props.usernameChangeHandler}
          />
          <input
            className={classes['form__input']}
            placeholder='Email'
            type='email'
          />
          <input
            className={classes['form__input']}
            placeholder='Password'
            type='password'
          />

          <div className="btnwrapper">
            <button
              className={classes['form__button']}
              type='submit'>
              Register
            </button>  
          </div>
          
        </form>
        <span className={classes['text']}>Already have an account? <a href="/">Click Here</a></span>
      </div>
    </main>
  );
};

RegisterView.displayName = 'RegisterView';
RegisterView.defaultProps = {};

export default RegisterView;
