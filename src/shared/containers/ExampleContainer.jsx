import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'app/shared/actions/actions';
import ExampleChild from 'app/shared/components/ExampleChild';

class ExampleContainer extends Component {

  render() {
    return (
      <div>
        <h2>Example Connected Component</h2>
        <ExampleChild {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    someValues: state.someValues,
    errorMessage: state.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  const actionMapping = {
    addSomeValue: actions.addSomeValue,
    addValueAsync: actions.addValueAsync,
  };

  return bindActionCreators(actionMapping, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
