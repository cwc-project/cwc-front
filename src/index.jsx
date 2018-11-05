import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import App from './App';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, app);