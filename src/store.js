import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
// import sessionStorage, { loadSessionToState } from 'middleware/sessionStorage';
import apiRequests from 'middleware/apiRequests';
import reducer from 'reducers';

const BASE_URL = 'https://cwc-back.herokuapp.com/api/v1';

// const initialState = loadSessionToState();

// const store = createStore(reducer, initialState, applyMiddleware(apiRequests(BASE_URL), thunk, promise, sessionStorage(), logger));
const store = createStore(reducer, applyMiddleware(apiRequests(BASE_URL), thunk, promise, logger));
export default store;