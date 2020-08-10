import React from 'react'
import localStyles from './accountPage.module.css';
import Header from "../Header";
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';
import AccountDetails from "./AccountDetails";

const AccountPage = () => {
    const user = useSelector(state => state.user.data);

    return (
        <>
            {user === undefined && <Navigate to="/login" />}
            <div className={localStyles.container}>
                <Header/>
                <div className={localStyles.contentContainer}>
                    <AccountDetails username={user && user.username}
                                    name={user && user.name}
                                    teamNumber={user && user.teamNumber} />
                </div>
            </div>
        </>

    )
}

export default AccountPage