import React from 'react';
import globalStyles from '../../App.css';
import homeStyles from './home.module.css';
import cx from 'classnames';

const Home = () => {
    return (
        <div className={ cx(homeStyles.homeContainer, globalStyles.mainContainer)}>
            <p>Hello World</p>
        </div>
    );
};


export default Home;

