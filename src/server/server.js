import 'babel/polyfill';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
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

// const router = Router.create({
//  routes: routes,
// });

const app = express();

app.use(cookieParser());

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const users = [
  {
    id: 1,
    username: 'jason',
    password: 'testpass',
  },
];

const SECRET = 'sekret';

app.post('/api/session', (req, res) => {
  const { username, password } = req.body.credentials;
  const user = users.find(reqUser => reqUser.username === username);

  if ((user) && (user.password === password)) {
    // Create token and add it to cookie
    const token = jwt.sign({id: user.id}, SECRET);

    res.cookie('token', token, {
      httpOnly: true,
    });

    res.json({
      currentUser: user,
    });
  } else {
    res.clearCookie('token');
    res.json({error: 'not logged in :('});
  }
});

app.delete('/api/session', (req, res) => {
  res.clearCookie('token');
  res.end();
});

app.get('/*', (req, res) => {

  let data = initialState;

  // Check token and include current user in initial state
  console.log(req.cookies.token);
  if (req.cookies.token) {
    const userId = jwt.verify(req.cookies.token, SECRET).id;
    const currentUser = users.find(user => user.id === Number(userId));

    data = Object.assign({}, data, {currentUser});
  }

  const store = configureStore(data);

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
