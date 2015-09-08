import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import { Provider } from 'react-redux';
import configureStore from '../shared/configureStore';

const initialState = JSON.parse(document.getElementById('init-data').value);

const store = configureStore(initialState);

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