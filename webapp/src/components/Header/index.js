import React from 'react';
import localStyles from './header.module.css';

const Header = () => {
  return(
    <div className={localStyles.container}>
        <div className={localStyles.logoContainer} >
            <img src="/images/logo.png" />
        </div>
        <h2>FRC Scouting App</h2>
    </div>
  )
}

export default Header