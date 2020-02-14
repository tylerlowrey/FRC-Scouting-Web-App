import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Styles/Pages/TeamsListPage.css';
import SideNavigation from "../Components/SideNavigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Authentication from "../Components/Authentication";
import LoadingScreen from "../Components/LoadingScreen";
import {SERVER_API_URL} from "../constants";
import shortid from "shortid";

const TeamsListPage = () => {

    let navigationItems = [
        { name: "Teams List", href: "#"},
        { name: "Advanced Search", href: "#"},
        { name: "Settings", href: "#"},
        { name: "Logout", href: "/logout"}
    ];

    const [loading, setLoading] = useState(true);
    const [teamsList, setTeamsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(<></>);

    const displayError = (message) => {
        setErrorMessage(
            <div className="alert alert-danger error-message fade show hide-message" key={shortid.generate()}>
                <p>{message}</p>
                <button type="button" className="close" aria-label="Close" id="login-error-close" onClick={hideError}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    };

    const hideError = () => {
        setErrorMessage(<></>);
    };

    useEffect(() => {
        axios.get(`${SERVER_API_URL}/teams`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(response => {
            console.log(response.data);
            let jsonArr = response.data;
            setTeamsList(jsonArr.sort((a, b) => {
                return a.team_number - b.team_number;
            }));
            setLoading(false);
        }).catch(error => {
            console.log(error);
            displayError("Error retrieving teams list from The Blue Alliance");
            setLoading(false);
        });
    }, []);

    return (
        <>
            <Authentication />
            {errorMessage}
            {loading ? <LoadingScreen /> : <></> }
            <div className="mainContainer">
                <SideNavigation navItems={navigationItems}/>
                <Header showMenuIcon={true} />
                <div className="content-wrapper">
                    <div className="scouting-data-table">
                        <div className="scouting-data-table-header">
                            <div className="scouting-data-cell">Team #</div>
                            <div className="scouting-data-cell">Team Name</div>
                            <div className="scouting-data-cell">Scouting Info</div>
                        </div>
                        <div className="scouting-data-table-body">
                        {
                            teamsList.map((item, index) => {
                               return (
                               <div className="scouting-data-row" key={index}>
                                    <div className="scouting-data-cell">{ item["team_number"] }</div>
                                    <div className="scouting-data-cell">{ item["nickname"] }</div>
                                    <div className="scouting-data-cell">
                                        <a href={"/team/" + item["key"]}><img src="/images/icons/open_in_new.png" alt="More Info Link" className="open-in-new-icon" /></a>
                                    </div>
                                </div>
                               );
                            })
                        }
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    )




};

export default TeamsListPage;