import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class RootContainer extends React.Component {
  render() {
    return(
      <div>
        <h1><Link to='app'>App</Link></h1>

        <nav>
          <ul>
            <li><Link to='about'>About</Link></li>
          </ul>
        </nav>

        <div>
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
}
