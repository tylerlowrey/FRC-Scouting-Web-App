import { userConstants } from "../constants";

export function user(state = {}, action) {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            break;
        case userConstants.LOGIN_SUCCESS:
            break;
        case userConstants.LOGIN_FAILURE:
            break;
        default:
            return state;
    }
}