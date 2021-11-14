import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.module.scss';

const NavView = () => {

  return (
    <nav className={classes['nav']}>
      <div className={classes['innerNav']}>
        <Link to={'/'} className={classes['navLink']}>Movies App</Link>
        <button className={classes['navLinkButton']}>User</button>
      </div>
    </nav>
  );
};

NavView.displayName = 'Nav';
NavView.defaultProps = {};

export default NavView;
