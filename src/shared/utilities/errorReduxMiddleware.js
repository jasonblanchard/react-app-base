export default function errorReduxMiddleware({ dispatch }) {
  return next => action => {
    if (action.error) {
      dispatch({type: 'SET_ERROR', payload: action.payload});
    } else if (action.type !== 'SET_ERROR') {
      dispatch({type: 'SET_ERROR', payload: ''});
    }
    next(action);
  };
}
