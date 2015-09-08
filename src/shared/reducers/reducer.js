import { combineReducers } from 'redux';
// import { actionConstants } from '../actions/actions';

function someValues(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

const app = combineReducers({
  someValues,
});

export default app;
