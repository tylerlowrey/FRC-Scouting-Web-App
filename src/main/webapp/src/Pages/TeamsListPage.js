import React, {useState} from 'react';
import axios from 'axios';
import '../Styles/Pages/TeamsListPage.css';
import SideNavigation from "../Components/SideNavigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Authentication from "../Components/Authentication";
import LoadingScreen from "../Components/LoadingScreen";

const TeamsListPage = () => {

    let navigationItems = [
        { name: "Teams List", href: "#"},
        { name: "Advanced Search", href: "#"},
        { name: "Settings", href: "#"},
        { name: "Logout", href: "/logout"}
    ];

    const [loading, setLoading] = useState(false);

    return (
        <>
            <Authentication />
            {loading ? <LoadingScreen /> : <></> }
            <div className="mainContainer">
                <SideNavigation navItems={navigationItems}/>
                <Header showMenuIcon={true} />
                <div className="content-wrapper">
                    <div className="scouting-data-table">
                        <div className="scouting-data-table-header">
                            <div className="scouting-data-cell">Team #</div>
                            <div className="scouting-data-cell">Rank</div>
                            <div className="scouting-data-cell">Scouting Score</div>
                            <div className="scouting-data-cell">Additional Stats</div>
                        </div>
                        <div className="scouting-data-table-body">
                            <div className="scouting-data-row">
                                <div className="scouting-data-cell">283</div>
                                <div className="scouting-data-cell">3</div>
                                <div className="scouting-data-cell">152</div>
                                <div className="scouting-data-cell"><a href="#">More Info</a></div>
                            </div>
                            <div className="scouting-data-row">
                            </div>
                            <div className="scouting-data-row">
                            </div>
                            <div className="scouting-data-row">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    )




};

export default TeamsListPage;