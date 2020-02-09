import React, {useState} from 'react';
import {SERVER_API_URL} from '../constants';
import '../Styles/Pages/LoginPage.css';
import Footer from "../Components/Footer";
import {Redirect} from 'react-router-dom';
import base64 from 'base-64';
import axios from 'axios';


const LoginPage = () => {

    const [user, setUser] = useState({ username: "", password: ""});
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");
    const [errorMessage, setErrorMessage] = useState(<></>);

    const handleInputChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    };

    const displayError = (message) => {
        setErrorMessage(
            <div className="alert alert-danger login-error-message fade show">
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

    const login = (event) => {
        event.preventDefault();

        axios.post(`${SERVER_API_URL}/login`, JSON.stringify(user), {
                headers: { 'Content-Type' : 'application/json'},
            }).then((response) => {
                if(response.status === 200)
                {
                    const jwtToken = response.headers["authorization"];
                    console.log(jwtToken.split(" ")[1].split(".")[1]);
                    const decodedToken = base64.decode(jwtToken.split(" ")[1].split(".")[1]);
                    console.log(decodedToken);
                    const jwtTimeout = JSON.parse(decodedToken)["exp"];

                    localStorage.setItem("authenticated", "true");
                    localStorage.setItem("jwt", jwtToken);
                    localStorage.setItem("jwt-timeout", jwtTimeout);
                    setAuthenticated(true);
                }
            }).catch( error => {
                if(error.response.status === 403)
                {
                    displayError("Username or password was incorrect");
                }
                else
                {
                    displayError("An error occurred while communicating with the server");
                    console.log(error);
                }

            });
    };

    if(authenticated)
    {
        return <Redirect to="/teams" />
    }
    else
    {
        return(
            <div className="mainContainer login-page-background">
                {errorMessage}
                <div className="login-page-transparent-bg-cover">
                    <div className="login-header">
                        <img src="/images/frc-283-logo-app-icon.png" className="logo-image" alt="FRC Team 283's logo" />
                        <h2 className="login-header-text">FRC 283 Scouting Dashboard</h2>
                    </div>
                    <div className="content-wrapper login-wrapper">
                        <div className="login-box">
                            <form onSubmit={login}>
                                <label htmlFor="username-input">Username</label>
                                <input name="username" type="text" className="login-text-input" id="username-input"
                                       onChange={handleInputChange} />
                                <label htmlFor="password-input">Password</label>
                                <input name="password" type="password" className="login-text-input" id="password-input"
                                       onChange={handleInputChange} />
                                <input type="submit" value="Login"/>
                            </form>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }

};

export default LoginPage;