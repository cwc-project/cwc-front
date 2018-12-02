import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import sessionStorage, { loadSessionToState } from 'middleware/sessionStorage';
import apiRequests from 'middleware/apiRequests';
// import reducer from 'reducers';
import createRootReducer from 'reducers'

const BASE_URL = 'https://cwc-back.herokuapp.com/api/v1';
const initialState = loadSessionToState();
export const history = createBrowserHistory();

const store = createStore(createRootReducer(history), initialState, compose(
    applyMiddleware(routerMiddleware(history), apiRequests(BASE_URL), thunk, promise, sessionStorage(), logger),),);

export default store;