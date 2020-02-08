import React, {useState} from 'react';
import SearchBar from './SearchBar';
import '../Styles/Header.css';

const Header = ({sideNavigationID = "side-navigation-menu", hamburgerIconInitial = "/images/icons/menu.png",
                 hamburgerIconShown = "/images/icons/menu_open.png", showMenuIcon = true, showSearchBar = true}) => {

    const [sideNavShown, setSideNavShown] = useState(false);

    const onNavMenuIconClicked = () => {
        if(sideNavShown)
        {
            document.getElementById(sideNavigationID).style.width = "0";
            document.getElementById("hamburger-icon").src = hamburgerIconInitial;
            setSideNavShown(false);
        }
        else
        {
            document.getElementById(sideNavigationID).style.width = "250px";
            document.getElementById("hamburger-icon").src = hamburgerIconShown;
            setSideNavShown(true);
        }
    };

    return (
        <header className="header">
            <img src="/images/frc-283-logo-app-icon.png" className={`logo-image ${showSearchBar ? "logo-text-with-search-bar" : ""}`}
                 alt="FRC Team 283's logo" />
            <h2 className="logo-text">FRC 283 Scouting Dashboard</h2>
            {showSearchBar ? <SearchBar /> : "" }
            <div className="navigation-hamburger-icon">
                {showMenuIcon ? <img src={hamburgerIconInitial} alt="Navigation hamburger icon"
                                 onClick={onNavMenuIconClicked} id="hamburger-icon" /> : ""}
            </div>
        </header>
    );
};


export default Header;
