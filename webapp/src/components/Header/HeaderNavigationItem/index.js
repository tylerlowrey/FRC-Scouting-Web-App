import React from 'react'
import localStyles from './headerNavigationItem.module.css';

const HeaderNavigationItem = ({ text = "", iconUrl, onClickAction }) => {
    return (
        <div className={localStyles.container} onClick={onClickAction}>
            {iconUrl && <img src={iconUrl} />}
            {text && <p>{text}</p>}
        </div>
    );
}

export default HeaderNavigationItem;