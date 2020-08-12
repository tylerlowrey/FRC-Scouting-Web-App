import React from 'react';
import localStyles from './header.module.css';
import classNames from 'classnames';
import HeaderNavigationItem from "./HeaderNavigationItem";
import {APP_NAME} from "../../constants";

/**
 * TODO: Make this mobile friendly
 * A universal Header element that is mobile friendly and can contain navigation links for the page
 * @param navigationLinks - An array of HeaderNavigationItem
 * @param backgroundClass - A CSS Module style that should only specify a background property
 * @param logoImageUrl - The url to the desired image for the logo (will be scaled down to 40x40)
 * @param logoText - The logo tagline text that will be displayed to the right of the logo
 * @returns {JSX.Element} - A Header that spans the entire width of its container
 * @constructor
 */
const Header = ({navigationLinks = [], backgroundClass = localStyles.primaryBackground,
                    logoImageUrl = "/images/logo.png", logoText = APP_NAME }) => {

    return (
        <div className={classNames(localStyles.container, backgroundClass)}>
            <div className={localStyles.logoContainer}>
                <img src={logoImageUrl}/>
                {logoText && <h2 className={localStyles.logoTagline}>{logoText}</h2>}
            </div>
            <div className={localStyles.navContainer}>
                {navigationLinks}
            </div>
        </div>
    )
}

export default Header