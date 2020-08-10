import { userConstants } from "../constants";
import {usersService} from "../services";

export const userActions = {
    login,
    logout,
    register
}

function login(username, password) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST, username })

        usersService.login(username, password).then(response => {
            console.log(response);
            let loggedInUser = {
                id : 1,
                name : "Tyler Lowrey",
                teamNumber : 283
            };
            dispatch({ type: userConstants.LOGIN_SUCCESS, user: loggedInUser });
            history.push("/account");
        }).catch(error => {
            console.log(error);
            dispatch({ type: userConstants.LOGIN_FAILURE })
        })
    }

}

function logout() {

}

function register(username, password) {

}

function getUser(username) {
}