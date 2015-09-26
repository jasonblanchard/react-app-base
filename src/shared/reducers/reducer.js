import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const someValues = handleActions({
  ADD_SOME_VALUE: (state, action) => {
    return [...state, action.payload];
  },
  ADD_VALUE_ASYNC: (state, action) => {
    return [...state, action.payload];
  },
}, {someValues: []});

const errorMessage = handleActions({
  SET_ERROR: (state, action) => {
    return action.payload;
  },
}, {errorMessage: ''});

const app = combineReducers({
  someValues,
  errorMessage,
});

export default app;
