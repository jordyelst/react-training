export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const logInRequest = (payload) => ({
    type: LOG_IN_REQUEST, payload
});

export const logOutRequest = () => ({
    type: LOG_OUT_REQUEST
});