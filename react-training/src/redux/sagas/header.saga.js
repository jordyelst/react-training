import {put, call, takeEvery} from 'redux-saga/effects';
import {ADD_HEADER_ITEM} from '../actions/header.actions';
import {getRandomWord} from '../api/randomWord';

function* addHeaderItemSaga({payload}) {
	try {
		//TODO 2: Instead of using a number as the label, we'd like to use a random word.
		// A function already exists for this to fetch a random word from an API, try to pass this on to a success action (similar to login.saga.js)
		// Tip: the fetching of the word is an async operation, we should try to figure out a way to wait for the result

		//TODO 5: dispatch the label to the success action
	} catch (error) {
		// catch error
	}
}

export default function* headerSaga() {
	yield takeEvery(ADD_HEADER_ITEM, addHeaderItemSaga);
}


