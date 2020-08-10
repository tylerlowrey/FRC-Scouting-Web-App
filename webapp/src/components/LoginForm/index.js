import React from 'react'
import localStyles from './loginForm.module.css';
import {useForm} from "react-hook-form";
import {userActions} from "../../actions/user.action";
import {useDispatch, useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

const LoginForm = () => {

    const {register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const onSubmit = (data) => {
        dispatch(userActions.login(data.username, data.password));
    }

    return (
        <>
            {user && <Navigate to="/accounts" replace={true} /> }
            <div className={localStyles.container}>
                <div className={localStyles.loginForm}>
                    <p className={localStyles.loginFormTitle}>Sign In</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username">Email</label>
                        <input name="username" type="text" ref={register({required: true})}/>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" ref={register({required: true})}/>
                        <input type="submit" className={localStyles.loginButton} value="Log In"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm