import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import app from 'app/shared/reducers/reducer';
import promiseMiddleware from 'redux-promise';
import errorReduxMiddleware from '../shared/utilities/errorReduxMiddleware.js';
import createLogger from 'redux-logger';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    errorReduxMiddleware,
    logger
)(createStore);

export default function(initialState) {
  return createStoreWithMiddleware(app, initialState);
}
