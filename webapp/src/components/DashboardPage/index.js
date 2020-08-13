import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import localStyles from './dashboardPage.module.css';
import Header from "../Header";
import HeaderNavigationItem from "../Header/HeaderNavigationItem";
import DashboardNavButton from "./DashboardNavButton";
import ScoutingDataTable from "../ScoutingDataTable";

const DashboardPage = () => {
    let user = useSelector(state => state.user.data);
    let navigate = useNavigate();

    let headerNavLinks = [
        <HeaderNavigationItem text="Account"
                              onClickAction={() => navigate("/account")}/>,
        <HeaderNavigationItem text="Logout"
                              onClickAction={() => navigate("/logout")}/>,
    ]

    let data = [
        {
            col1: 'Hello',
            col2: 'World',
        },
        {
            col1: 'react-table',
            col2: 'rocks',
        },
        {
            col1: 'whatever',
            col2: 'you want',
        },
    ];

    let dataLayout = [
        {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Column 2',
            accessor: 'col2',
        },
    ];

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
                        <ScoutingDataTable scoutingData={data} tableLayout={dataLayout} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;