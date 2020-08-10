import React from 'react'
import localStyles from './accountDetails.module.css';
import classNames from "classnames";

const AccountDetails = ({ username, name, teamNumber}) => {
    return (
        <div className={localStyles.container}>
            <h2 className={localStyles.containerTitle}>Account Details</h2>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className={localStyles.accountDetailLabel} id="basic-addon3">Username</span>
                </div>
                <input type="text" id="basic-url" aria-describedby="basic-addon3" disabled
                       className={classNames( "form-control", localStyles.accountDetailInput)}
                       value={username}/>
            </div>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className={localStyles.accountDetailLabel} id="basic-addon3">Name</span>
                </div>
                <input type="text"id="basic-url" aria-describedby="basic-addon3" disabled
                       className={classNames( "form-control", localStyles.accountDetailInput)}
                       value={name}/>
            </div>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className={localStyles.accountDetailLabel} id="basic-addon3">Team Number</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" disabled
                       className={classNames( "form-control", localStyles.accountDetailInput)}
                       value={teamNumber}/>
            </div>
            <button className={classNames("btn btn-primary", localStyles.editAccountBtn)}>Edit Account</button>
        </div>
    )
}

export default AccountDetails