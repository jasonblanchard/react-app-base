import { combineReducers } from 'redux';
import { actionConstants } from '../actions/actions';

function someValues(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

function currentUser(state = {}, action) {
  switch (action.type) {
  case (actionConstants.RECEIVE_AUTH):
    return action.currentUser;
  case (actionConstants.AUTH_LOGOUT):
    return {};
  default:
    return state;
  }
}

const app = combineReducers({
  someValues,
  currentUser,
});

export default app;
