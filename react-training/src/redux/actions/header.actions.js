export const ADD_HEADER_ITEM = 'ADD_HEADER_ITEM';
export const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

export const addHeaderItem = (payload) => ({
    type: ADD_HEADER_ITEM, payload
});

export const removeHeaderItem = (payload) => ({
    type: REMOVE_HEADER_ITEM, payload
});