import React from 'react';
import Input from '../../ui/Input/Input';
import MSvg from '../../ui/MSvg/MSvg';

import icons from '../../../assets/icons';

import classes from './About.module.scss';

interface Props {
  readonly iconName: keyof typeof icons;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly usernameChangeHandler: (value: string) => void;
  readonly emailChangeHandler: (value: string) => void;
  readonly passwordChangeHandler: (value: string) => void;
}

const AboutView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
      <div className={classes['outerContainer']}>
        <MSvg
          name='about'
          className={classes['svgContainer']} 
        />
        <div className={classes['innerContainer']}>
            <h1 className={classes['innerContainer__header']}>About Us!</h1>
            <p className={classes['innerContainer__text']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className={classes['innerContainer__button']}
              type='button'>
              Go to movies!
            </button>
        </div>
      </div>
  );
};

AboutView.displayName = 'AboutView';
AboutView.defaultProps = {};

export default AboutView;
