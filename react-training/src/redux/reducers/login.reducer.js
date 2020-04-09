import {
    LOG_IN_REQUEST,
    LOG_IN_REQUEST_SUCCESS,
    LOG_OUT_REQUEST,
    LOG_OUT_REQUEST_SUCCESS
} from '../actions/login.actions';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    username: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOG_IN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                username: action.payload.username
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOG_OUT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                username: null
            };
        default:
            return state;
    }
};