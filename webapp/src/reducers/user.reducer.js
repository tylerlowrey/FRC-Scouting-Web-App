import { userConstants } from "../constants";

//TODO: Set this to empty for production/refactor this to only be used during testing
const defaultUserState = {
    data: {
        id: 1,
        username: "accounts@tylerlowrey.com",
        name: "Tyler Lowrey",
        teamNumber: 283,
    }
};

export function user(state = defaultUserState, action) {
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