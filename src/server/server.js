import 'babel/polyfill';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import Router from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import routes from '../shared/routes';
import configureStore from '../shared/configureStore';
import initialState from './fixtures/initialStateFixture';

let data = initialState;

const router = Router.create({
  routes: routes,
});

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  const store = configureStore(initialState);

  Router.run(routes, req.url, (Handler) => {
    const markup = React.renderToString(
      <Provider store={store}>
        {() => <Handler router={router} />}
      </Provider>
    );

    res.render('index', {markup: markup, initialState: JSON.stringify(data)});
  });
});

app.listen('8080');
