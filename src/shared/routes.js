import React from 'react';
import { IndexRoute, Route } from 'react-router';
import RootContainer from 'app/shared/containers/RootContainer';
import AboutContainer from 'app/shared/containers/AboutContainer';
import ExampleContainer from 'app/shared/containers/ExampleContainer';
import HelloContainer from 'app/shared/containers/HelloContainer';
import NoMatch from 'app/shared/containers/NoMatch.js';

export default (
  <Route path="/" component={RootContainer}>
    <Route path="/about" component={AboutContainer} />
    <Route path="/hello/:name" component={HelloContainer} />
    <IndexRoute component={ExampleContainer} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
