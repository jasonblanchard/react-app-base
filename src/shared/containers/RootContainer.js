import React from 'react';
import { Link } from 'react-router';

export default class RootContainer extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">App</Link></h1>

        <nav>
          <ul>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/hello/world" activeClassName="active">Hello</Link></li>
          </ul>
        </nav>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
