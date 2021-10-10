import React from 'react';

import classes from './Nav.module.scss';

const NavView = () => {

  return (
    <nav className={classes['nav']}>
      <div className={classes['innerNav']}>
        <a className={classes['navLink']}>Movies App</a>
        <button className={classes['navLinkButton']}>User</button>
      </div>
    </nav>
  );
};

NavView.displayName = 'Nav';
NavView.defaultProps = {};

export default NavView;
