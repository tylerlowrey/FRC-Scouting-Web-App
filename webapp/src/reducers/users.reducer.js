import { usersConstants } from "../constants";

export function users(state = {}, action) {
    switch(action.type) {
        case usersConstants.LOGIN_REQUEST:
            break;
        case usersConstants.LOGIN_SUCCESS:
            break;
        case usersConstants.LOGIN_FAILURE:
            break;
        default:
            return state;
    }
}