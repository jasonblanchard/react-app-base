import React from 'react';
import { IndexRoute, Route } from 'react-router';
import RootContainer from './containers/RootContainer';
import About from './containers/about';
import ExampleContainer from './containers/ExampleContainer';
import HelloContainer from './containers/HelloContainer';
import NoMatch from './containers/NoMatch.js';

export default (
  <Route path="/" component={RootContainer}>
    <Route path="/about" component={About} />
    <Route path="/hello/:name" component={HelloContainer} />
    <IndexRoute component={ExampleContainer} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
