import { userConstants } from "../constants";

export const userActions = {
    login,
    logout,
    register
}

function login(username, password) {
    return { type: userConstants.LOGIN_REQUEST, username }
}

function logout() {

}

function register(username, password) {

}