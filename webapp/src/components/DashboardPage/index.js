import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import localStyles from './dashboardPage.module.css';
import Header from "../Header";
import HeaderNavigationItem from "../Header/HeaderNavigationItem";
import DashboardNavButton from "./DashboardNavButton";
import ScoutingDataTable from "../ScoutingDataTable";
import {scoutingDataService} from "../../services";

const DashboardPage = () => {
    let user = useSelector(state => state.user.data);
    let navigate = useNavigate();
    let [scoutingDataHeaders, setScoutingDataHeaders] = useState([]);
    let [scoutingData, setScoutingData] = useState([]);

    let headerNavLinks = [
        <HeaderNavigationItem text="Account"
                              onClickAction={() => navigate("/account")}/>,
        <HeaderNavigationItem text="Logout"
                              onClickAction={() => navigate("/logout")}/>,
    ]

    // Retrieve scouting data
    useEffect(() => {
        let data = scoutingDataService.getAllScoutingData();
        //TODO: Handle errors

        let dataHeaders = [];
        data.headers.map((item, key) => {
            // Header and accessor are the required names for react table column definitions
            dataHeaders.push({"Header": item.title, "accessor": item.headerId})
        });
        setScoutingDataHeaders(dataHeaders);

        console.log(data.rows)
        setScoutingData(data.rows);
        console.log(scoutingDataHeaders);
        console.log(scoutingData);
    }, []);

    return (
        <>
            {user === undefined && <Navigate to="/login"/>}
            <div className={localStyles.container}>
                <Header navigationLinks={headerNavLinks}/>
                <div className={localStyles.contentContainer}>
                    <div className={localStyles.navContainer}>
                        <DashboardNavButton name="Events"/>
                        <DashboardNavButton name="Teams"/>
                        <DashboardNavButton name="Pit Scouting"/>
                        <DashboardNavButton name="Match Scouting"/>
                    </div>
                    <div className={localStyles.modulesContainer}>
                        <ScoutingDataTable scoutingData={scoutingData} tableLayout={scoutingDataHeaders}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;