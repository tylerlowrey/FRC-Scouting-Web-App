import React from 'react'
import localStyles from './accountPage.module.css';
import Header from "../Header";
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

const AccountPage = () => {
    const user = useSelector(state => state.user.data);

    return (
        <>
            {user === undefined && <Navigate to="/login" />}
            <div className={localStyles.container}>
                <Header/>
            </div>
        </>

    )
}

export default AccountPage