import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/actions';

class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};
  }

  onSubmit(e) {
    e.preventDefault();
    const { requestAuth } = this.props;
    requestAuth(this.state);
    this.setState({username: '', password: ''});
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleClick() {
    const { requestAuthLogout } = this.props;
    requestAuthLogout();
  }

  renderCurrentUser() {
    const { currentUser } = this.props;
    let markup;

    if (currentUser.username) {
      markup = (
        <div>
          Currently logged in: {currentUser.username}
          <br />
          <button onClick={this.handleClick.bind(this)}>Logout</button>
        </div>
      );
    } else {
      markup = (
        <div>
          Not logged in
        </div>
      );
    }

    return markup;
  }

  render() {
    return (
      <div>
        <h2>Login</h2>

        {this.renderCurrentUser()}
        <br />
        <br />

        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  const actionMapping = {
    requestAuth: actions.requestAuth,
    requestAuthLogout: actions.requestAuthLogout,
  };

  return bindActionCreators(actionMapping, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
