import { userConstants } from "../constants";

export function user(state = {}, action) {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {...state, username: action.username };
        case userConstants.LOGIN_SUCCESS:
            return {...state, data: action.data };
        case userConstants.LOGIN_FAILURE:
            return state;
        case userConstants.LOGOUT:
            return {...state, data: undefined}
        default:
            return state;
    }
}