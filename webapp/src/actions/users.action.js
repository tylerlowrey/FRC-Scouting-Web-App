import { usersConstants } from "../constants";

export const usersActions = {
    login,
    logout,
    register
}

function login(username, password) {
    dispatch({ type: usersConstants.LOGIN_REQUEST, username, password })
}

function logout() {

}

function register(username, password) {

}