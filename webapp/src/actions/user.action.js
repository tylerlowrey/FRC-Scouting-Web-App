import { userConstants } from "../constants";

export const userActions = {
    login,
    logout,
    register
}

function login(username, password) {
    dispatch({ type: userConstants.LOGIN_REQUEST, username, password })
}

function logout() {

}

function register(username, password) {

}