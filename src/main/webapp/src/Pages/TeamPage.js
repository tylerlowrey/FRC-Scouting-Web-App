import React, {useEffect, useState} from "react";
import '../Styles/Pages/TeamPage.css'
import Authentication from "../Components/Authentication";
import LoadingScreen from "../Components/LoadingScreen";
import Header from "../Components/Header";
import SideNavigation from "../Components/SideNavigation";
import shortid from "shortid";
import {SERVER_API_URL} from "../constants";
import axios from 'axios';
import DataTable from "../Components/DataTable";

const TeamPage = ({ teamKey = "" }) => {

    let navigationItems = [
        { name: "Teams List", href: "#"},
        { name: "Advanced Search", href: "#"},
        { name: "Settings", href: "#"},
        { name: "Logout", href: "/logout"}
    ];

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(<></>);
    const [teamData, setTeamData] = useState([]);

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

        axios.get(`${SERVER_API_URL}/teams/${teamKey}tba`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(response => {
            setTeamData(response.data);
            console.log("Team Data: ");
            console.log(teamData);

        }).catch(error => {
            console.log(error);
        })
    }, [teamKey]);

    return(
      <>
          <Authentication />
          {errorMessage}
          {loading ? <LoadingScreen /> : <></> }
          <div className="mainContainer">
              <SideNavigation navItems={navigationItems}/>
              <Header showMenuIcon={true} />
              <div className="content-wrapper">
                  <div className="team-page-container">
                      <div className="card team-page-info-card">
                          <img src="/images/login_background_tile.png" alt="Placeholder for robot image" className="team-page-robot-img"/>
                      </div>
                      <DataTable
                        />
                  </div>
              </div>
          </div>
      </>
    );

};

export default TeamPage;