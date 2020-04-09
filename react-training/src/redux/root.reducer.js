import {combineReducers} from 'redux';
import {loginReducer} from './reducers/login.reducer';
import {headerReducer} from './reducers/header.reducer';

const combinedReducers = combineReducers({
	loginReducer,
	headerReducer
});

export const rootReducer = function (state, action) {
	if (action.type === 'RESET_STATE') {
		state = undefined;
	}
	return combinedReducers(state, action);
};
