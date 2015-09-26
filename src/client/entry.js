import 'babel/polyfill';
import React from 'react';
import routes from 'app/shared/routes';
import { Provider } from 'react-redux';
import configureStore from 'app/shared/configureStore';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

const initialState = JSON.parse(document.getElementById('init-data').value);

const store = configureStore(initialState);

React.render(
  <Provider store={store}>
    {() => <Router history={history} routes={routes} />}
  </Provider>,
  document.getElementById('app')
);
