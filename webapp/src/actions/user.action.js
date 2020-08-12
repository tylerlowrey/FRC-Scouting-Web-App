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
            let loggedInUser = usersService.getUser(response.data.id);
            dispatch({ type: userConstants.LOGIN_SUCCESS, data: loggedInUser });
        }).catch(error => {
            console.log(error);
            dispatch({ type: userConstants.LOGIN_FAILURE })
        })
    }

}

function logout() {
    usersService.logout();
    return { type: userConstants.LOGOUT };
}

function register(username, password) {

}