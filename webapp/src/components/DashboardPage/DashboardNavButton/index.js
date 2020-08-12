import React from 'react';
import localStyles from './dashboardNavButton.module.css';

const DashboardNavButton = ({ name, onClickAction = () => null }) => {
    return(
        <div className={localStyles.container} onClick={onClickAction}>
            <p>{name}</p>
        </div>
    )
}

export default DashboardNavButton;