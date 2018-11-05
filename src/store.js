import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import sessionStorage, { loadSessionToState } from 'middleware/sessionStorage';

import reducer from 'reducers';

const initialState = loadSessionToState();

const store = createStore(reducer, initialState, applyMiddleware(thunk, promise, sessionStorage(), logger));

export default store;