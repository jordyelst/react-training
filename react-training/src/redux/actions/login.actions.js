export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_REQUEST_SUCCESS = 'LOG_IN_REQUEST_SUCCESS';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_REQUEST_SUCCESS = 'LOG_OUT_REQUEST_SUCCESS';

export const logInRequest = (payload) => ({
    type: LOG_IN_REQUEST, payload
});

export const logInRequestSuccess = (payload) => ({
    type: LOG_IN_REQUEST_SUCCESS, payload
});

export const logOutRequest = () => ({
    type: LOG_OUT_REQUEST
});

export const logOutRequestSuccess = () => ({
    type: LOG_OUT_REQUEST_SUCCESS
});