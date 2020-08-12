import React from 'react'
import localStyles from './accountPage.module.css';
import Header from "../Header";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from 'react-router-dom';
import AccountDetails from "./AccountDetails";
import HeaderNavigationItem from "../Header/HeaderNavigationItem";

const AccountPage = () => {
    const user = useSelector(state => state.user.data);
    let navigate = useNavigate();

    const headerNavItems = [
        <HeaderNavigationItem text="Logout"
                              onClickAction={() => navigate("/logout")} />

    ];

    return (
        <>
            {user === undefined && <Navigate to="/login" />}
            <div className={localStyles.container}>
                <Header navigationLinks={headerNavItems}/>
                <div className={localStyles.contentContainer}>
                    <AccountDetails username={user && user.username}
                                    name={user && user.name}
                                    teamNumber={user && user.teamNumber} />
                </div>
            </div>
        </>
    );
}

export default AccountPage