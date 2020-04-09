import {combineReducers} from 'redux';
import {loginReducer} from './reducers/login.reducer';

const combinedReducers = combineReducers({
	loginReducer
});

export const rootReducer = function (state, action) {
	if (action.type === 'RESET_STATE') {
		state = undefined;
	}
	return combinedReducers(state, action);
};
