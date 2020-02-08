import React, {useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';

const Authentication = ({unauthenticatedRedirect = "/login", logout = false}) => {

    const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");
    const [showRedirect, setShowRedirect] = useState(false);

    const logoutUser = () => {
        localStorage.setItem("authenticated", "false");
        localStorage.setItem("jwt", "");
        localStorage.setItem("jwt-timeout", "0");
        setAuthenticated(false);
        setShowRedirect(true);
    };

    const checkLogin = () => {
        let currentTimeMillis = Math.round((new Date()).getTime() / 1000);

        if(currentTimeMillis.toString() > localStorage.getItem("jwt-timeout"))
        {
            localStorage.setItem("authenticated", "false");
            setAuthenticated(false)
        }

        if(isAuthenticated)
            setShowRedirect(false);
        else
            setShowRedirect(true);
    };

    useEffect(() => {

        checkLogin();

        const interval = setInterval(() => {
            checkLogin();
        }, 60000); //Run once a minute
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        if(logout)
            logoutUser();
    });

    return <>{showRedirect ? <Redirect to={unauthenticatedRedirect} /> : ""}</>;
};

export default Authentication;