import 'regenerator-runtime/runtime';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from './root.saga';
import {rootReducer} from './root.reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;


// run the saga
sagaMiddleware.run(rootSaga);