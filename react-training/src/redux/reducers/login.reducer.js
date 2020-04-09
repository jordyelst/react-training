import {LOG_IN_REQUEST, LOG_OUT_REQUEST} from '../actions/login.actions';

const initialState = {
    isLoggedIn: false,
    username: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                username: null
            };
        default:
            return state;
    }
};