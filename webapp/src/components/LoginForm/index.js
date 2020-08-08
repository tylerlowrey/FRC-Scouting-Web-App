import React from 'react'
import localStyles from './loginForm.module.css';

const LoginForm = () => {
  return(
    <div className={localStyles.container}>
        <div className={localStyles.loginForm}>
            <p className={localStyles.loginFormTitle}>Login</p>
            <label htmlFor="username">Email</label>
            <input name="username" type="text"/>
            <label htmlFor="password">Password</label>
            <input name="password" type="password"/>
            <button className={localStyles.loginButton} >Login</button>
        </div>
    </div>
  )
}

export default LoginForm