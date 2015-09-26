import { combineReducers } from 'redux';
import { actionConstants } from 'app/shared/actions/actions';

function someValues(state = [], action) {
  switch (action.type) {
  case actionConstants.ADD_SOME_VALUE:
    return [...state, action.value];
  default:
    return state;
  }
}

const app = combineReducers({
  someValues,
});

export default app;
