import 'babel/polyfill';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../shared/configureStore';
import initialState from './fixtures/initialStateFixture';

/*
import { createLocation } from 'history'
import RoutingContext from 'react-router/lib/RoutingContext'
import Router from 'react-router'
import { match } from 'react-router'
import routes from '../shared/routes';
import { renderToString } from 'react-dom/server'
*/

let data = initialState;

// const router = Router.create({
//  routes: routes,
// });

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  const store = configureStore(initialState);

  /*

  let location = createLocation(req.url)

  match(routes, location, (err, props, redirectInfo) => {
    const markup = renderToString(
      <Provider store={store}>
      {() => 
        <RoutingContext {...props} />
      }
      </Provider>
    );
  });

  res.render('index', {markup: markup, initialState: JSON.stringify(data)});

  /*
  Router.run(routes, req.url, (Handler) => {
    const markup = React.renderToString(
      <Provider store={store}>
        {() => <Handler router={router} />}
      </Provider>
    );

    res.render('index', {markup: markup, initialState: JSON.stringify(data)});
  });
  */

  const markup = '';

  res.render('index', {markup: markup, initialState: JSON.stringify(data)});
});

app.listen('8080');
