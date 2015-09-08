import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import RootContainer from './containers/RootContainer';
import About from './containers/about';
import ExampleContainer from './containers/ExampleContainer';

export default (
  <Route name="app" path="/" handler={RootContainer}>
    <Route name="about" path="/about" handler={About} />
    <DefaultRoute handler={ExampleContainer} />
  </Route>
);
