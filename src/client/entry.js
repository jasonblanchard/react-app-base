import 'babel/polyfill';
import React from 'react';
import routes from '../shared/routes';
import { Provider } from 'react-redux';
import configureStore from '../shared/configureStore';
import { Router } from 'react-router';
import { createHistory } from 'history';

const history = createHistory();

const initialState = JSON.parse(document.getElementById('init-data').value);

const store = configureStore(initialState);

console.log(store.getState());

React.render(
  <Provider store={store}>
  {() =>
    <Router history={history}>
      {routes}
    </Router>
  }
  </Provider>,
  document.getElementById('app')
);
