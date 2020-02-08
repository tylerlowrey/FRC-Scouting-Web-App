import React from 'react';
import '../Styles/SideNavigation.css';

const SideNavigation = ({ id = "side-navigation-menu", navItems = [], show = true }) => {

    const navElements = navItems.map((element, index) => {
        return <a className="side-navigation-item" href={element.href} key={index}>{element.name}</a>;
    });

    if(show)
    {
        return (
            <div className="side-navigation-container" id={id} >
                {navElements}
                {/*<a className="side-navigation-item" href="#">Teams List</a>
          <a className="side-navigation-item" href="#">Advanced Search</a>
          <a className="side-navigation-item" href="#">Settings</a>*/}
            </div>
        );
    }
};

export default SideNavigation;