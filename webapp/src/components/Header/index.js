import React from 'react';
import localStyles from './header.module.css';
import classNames from 'classnames';

const Header = ({ navigationLinks = [], backgroundClass = localStyles.primaryBackground }) => {
  return(
    <div className={classNames(localStyles.container, backgroundClass)}>
        <div className={localStyles.logoContainer} >
            <img src="/images/logo.png" />
        </div>
        <h2>FRC Scouting App</h2>
    </div>
  )
}

export default Header