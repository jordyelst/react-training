import {ADD_HEADER_ITEM, REMOVE_HEADER_ITEM} from '../actions/header.actions';

const initialState = {
    property: 'do not remove this',
    headerItems: [{
        label: 1
    }]
};

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HEADER_ITEM:
            return {
                ...state,
                headerItems: [...state.headerItems, action.payload]
            };
        case REMOVE_HEADER_ITEM:
            return {
                ...state,
                headerItems: state.headerItems.filter(headerItem => headerItem.label !== action.payload.label)
            };
        default:
            return state;
    }
};