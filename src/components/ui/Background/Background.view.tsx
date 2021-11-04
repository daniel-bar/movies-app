import React from 'react';

import classes from './Background.module.scss';

interface Props { }

const BackgroundView = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className={classes['mainContainer']}>
      {props.children}
    </div>
  );
};

BackgroundView.displayName = 'Background';
BackgroundView.defaultProps = {};

export default BackgroundView;
