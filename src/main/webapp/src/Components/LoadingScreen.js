import React from "react";
import '../Styles/Components/LoadingScreen.css'

const LoadingScreen = () => {
    return(
        <div className="loading-screen-bg">
            <div className="loading-icon-container">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
};

export default LoadingScreen;