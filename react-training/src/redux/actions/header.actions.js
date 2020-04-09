export const ADD_HEADER_ITEM = 'ADD_HEADER_ITEM';
//TODO 3: Add some more actions here for success and failure, we don't need any for the remove action because a saga would be redundant in this case
export const REMOVE_HEADER_ITEM = 'REMOVE_HEADER_ITEM';

export const addHeaderItem = (payload) => ({
    type: ADD_HEADER_ITEM, payload
});

export const removeHeaderItem = (payload) => ({
    type: REMOVE_HEADER_ITEM, payload
});