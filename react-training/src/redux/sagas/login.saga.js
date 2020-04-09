import {put, takeEvery, delay} from 'redux-saga/effects';
import {LOG_IN_REQUEST, LOG_OUT_REQUEST, logInRequestSuccess, logOutRequestSuccess} from '../actions/login.actions';

function* logInRequestSaga({payload}) {
	try {
		yield delay(2000);
		localStorage.setItem("USERNAME", payload.username);
		yield put(logInRequestSuccess(payload));
	} catch (error) {
		// catch error
	}
}

function* logOutRequestSaga({payload}) {
	try {
		yield delay(2000);
		localStorage.removeItem("USERNAME");
		yield put(logOutRequestSuccess(payload));
	} catch (error) {
		// catch error
	}
}

export default function* loginSaga() {
	//TODO 1: Change the takeEvery effect for the LOG_IN_REQUEST, we only want the saga to run on the latest login request that was fired, check the powerpoint
	yield takeEvery(LOG_IN_REQUEST, logInRequestSaga);
	yield takeEvery(LOG_OUT_REQUEST, logOutRequestSaga);
}


