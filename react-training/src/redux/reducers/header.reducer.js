const initialState = {
    property: 'do not remove this',
    headerItems: [{
        label: 1
    }]
};

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        //TODO 4: Update this reducer to listen to the actions you just created, then update the state, always add your new header item to the existing array,
        //Tip: make sure you don't replace the entire state, first copy it, then only replace the properties that need to be replaced
        //maybe use the spread operator here? [...array, newItem] <- You can also do this for objects
        default:
            return state;
    }
};