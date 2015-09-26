import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from 'app/shared/reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default function(initialState) {
  return createStoreWithMiddleware(app, initialState);
}
