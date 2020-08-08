import { userConstants } from "../constants";

export function user(state = {}, action) {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {...state, username: action.username };
        case userConstants.LOGIN_SUCCESS:
            return {...state, user: action.user };
        case userConstants.LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}