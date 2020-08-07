import React from 'react';
import globalStyles from '../../App.css';
import localStyles from './home.module.css';
import cx from 'classnames';
import Header from "../Header";
import LoginForm from "../LoginForm";

const Home = () => {
    return (
        <div className={ cx(localStyles.container, globalStyles.mainContainer)}>
            <Header />
            <LoginForm />
        </div>
    );
};


export default Home;

