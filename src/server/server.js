import 'babel/polyfill';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import React from 'react';
import createLocation from 'history/lib/createLocation'
import { RoutingContext } from 'react-router'
import matchRoutes from 'react-router/lib/matchRoutes';
import { Provider } from 'react-redux';
import routes from '../shared/routes';
import configureStore from '../shared/configureStore';
import initialState from './fixtures/initialStateFixture';

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
  /*
  const store = configureStore(initialState);

  let location = createLocation(req.url)
  matchRoutes(routes, location, (err, props, redirectInfo) => {

    const markup = React.renderToString(<RoutingContext {...props}/>);

    res.render('index', {markup: markup, initialState: JSON.stringify(data)});
  });
  
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
