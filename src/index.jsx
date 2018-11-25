import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getUser } from './actions';

import store from './store';

store.dispatch(getUser());

import App from './App';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, app);