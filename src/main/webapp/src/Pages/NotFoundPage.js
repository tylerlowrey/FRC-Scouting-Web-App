import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideNavigation from "../Components/SideNavigation";
import '../Styles/Pages/NotFoundPage.css'

const NotFoundPage = () => {


    const [navigationItems, setNavigationItems] = useState([
        { name: "Login", href: "/login"}
    ]);

    const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");

    useEffect(() => {
        console.log(isAuthenticated);
        setAuthenticated(localStorage.getItem("authenticated") === "true");

        if(isAuthenticated)
        {
            setNavigationItems([
                {name: "Teams List", href: "#"},
                {name: "Advanced Search", href: "#"},
                {name: "Settings", href: "#"},
                {name: "Logout", href: "/logout"}
            ]);
        }
        else
        {
            setNavigationItems([
                { name: "Login", href: "/login"},
            ]);
        }

    }, []);


    return (
        <div className="mainContainer ">
            <SideNavigation navItems={navigationItems} />
            <Header showSearchBar={false}/>
            <div className="content-wrapper page-not-found-wrapper">
                <div className="page-not-found-message-box ">
                    <p>404 - Page Not Found</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default NotFoundPage;