import React from 'react'
import localStyles from './accountDetails.module.css';

const AccountDetails = ({ username, name, teamNumber}) => {
    return (
        <div className={localStyles.container}>
            <h2 className={localStyles.containerTitle}>Account Details</h2>
            <p><b>Username:</b> {username}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Team Number:</b> {teamNumber}</p>
        </div>
    )
}

export default AccountDetails