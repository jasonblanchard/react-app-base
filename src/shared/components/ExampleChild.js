import React from 'react';
import { Component, PropTypes } from 'react';

const propTypes = {
  someValues: PropTypes.array,
};

export default class ExampleChild extends Component {
  render() {
    return (
      <div>
        I am a child component. I can access someValues: {this.props.someValues}
      </div>
    );
  }
}

ExampleChild.propTypes = propTypes;
