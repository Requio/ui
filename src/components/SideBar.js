import React from 'react';
import { Link } from 'react-router-dom';

import SVG from './SVG';

import styles from './SideBar.css';

import logo from '../static/images/test.svg';

const SideBar = () => (
  <div className={styles.sideBar}>
    <SVG file={logo} />
    Requio
    <div>
      <Link to="/">home</Link>
    </div>
    <div>
      <Link to="/profile">profile</Link>
    </div>
  </div>
);

export default SideBar;
