import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from '../shared/reducers/reducer';

const initialState = JSON.parse(document.getElementById('init-data').value);

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(app, initialState);

console.log(store.getState());

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation,
});

router.run((Handler) => {
  React.render(
    <Provider store={store}>
    {() => <Handler router={router} />}
    </Provider>,
    document.getElementById('app')
  );
});
