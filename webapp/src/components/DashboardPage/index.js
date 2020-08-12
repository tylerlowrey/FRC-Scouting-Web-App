import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import localStyles from './dashboardPage.module.css';
import Header from "../Header";
import HeaderNavigationItem from "../Header/HeaderNavigationItem";
import DashboardNavButton from "./DashboardNavButton";

const DashboardPage = () => {
    let user = useSelector(state => state.user.data);
    let navigate = useNavigate();

    let headerNavLinks = [
        <HeaderNavigationItem text="Account"
                              onClickAction={() => navigate("/account")}/>,
        <HeaderNavigationItem text="Logout"
                              onClickAction={() => navigate("/logout")}/>,
    ]

    return (
        <>
            {user === undefined && <Navigate to="/login" />}
            <div className={localStyles.container} >
                <Header navigationLinks={headerNavLinks} />
                <div className={localStyles.contentContainer} >
                    <div className={localStyles.navContainer}>
                        <DashboardNavButton name="Events" />
                        <DashboardNavButton name="Teams" />
                        <DashboardNavButton name="Pit Scouting" />
                        <DashboardNavButton name="Match Scouting" />
                    </div>
                    <div className={localStyles.modulesContainer}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;