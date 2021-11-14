import React from 'react';
import { Link } from 'react-router-dom';

import MSvg from '../../ui/MSvg/MSvg';

import icons from '../../../assets/icons';

import classes from './Welcome.module.scss';

interface Props {
  readonly iconName: keyof typeof icons;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly usernameChangeHandler: (value: string) => void;
  readonly emailChangeHandler: (value: string) => void;
  readonly passwordChangeHandler: (value: string) => void;
}

const WelcomeView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
      <div className={classes['outerContainer']}>
        <div className={classes['upperContainer']}>
          <h1 className={classes['upperContainer__header']}>Title - Something</h1>
          <video width="750" height="500" controls>
            <source src='' type="video/mp4"/>
          </video>
          <div className={classes['upperContainer__description']}>cwencwejcnwekjcnwevkmwelvkwemclkwen</div>
        </div>
        <div className={classes['lowerContainer']}>
          <Link to={'/movies'}>
            <button
              className={classes['lowerContainer__button']}
              type='button'>
              Go to movies!
            </button>
          </Link>
            <MSvg
              name='welcome'
              className={classes['svgContainer']} 
            />
        </div>
      </div>
  );
};

WelcomeView.displayName = 'WelcomeView';
WelcomeView.defaultProps = {};

export default WelcomeView;
