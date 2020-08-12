import React, {useEffect} from 'react'
import {userActions} from "../../actions/user.action";
import {useDispatch} from "react-redux";
import {Navigate} from 'react-router-dom';

const LogoutPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <Navigate to="/login" />
    )
}

export default LogoutPage;