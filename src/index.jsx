import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
// import { getUser } from './actions';

import store, {history} from './store';

// store.dispatch(getUser());

import App from './App';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}><ConnectedRouter history={history}><App /></ConnectedRouter></Provider>, app);