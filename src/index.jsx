import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import store from './store';
import App from './App';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, app);