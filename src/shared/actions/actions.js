import qajax from 'qajax';

export const actionConstants = {
  ADD_SOME_VALUE: 'ADD_SOME_VALUE',
  REQUEST_AUTH: 'REQUEST_AUTH',
  RECEIVE_AUTH: 'RECEIVE_AUTH',
  REQUEST_AUTH_LOGOUT: 'REQUEST_AUTH_LOGOUT',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
};

export function addSomeValue(value) {
  return {
    type: actionConstants.ADD_SOME_VALUE,
    value,
  };
}

export function receiveAuth(currentUser) {
  return {
    type: actionConstants.RECEIVE_AUTH,
    currentUser,
  };
}

export function requestAuth(credentials) {
  return function(dispatch) {
    // POST to /api/session
    return qajax({
      url: '/api/session',
      method: 'POST',
      data: {credentials: credentials},
    }).then((data) => {
      const parsedResponse = JSON.parse(data.response);
      const currentUser = parsedResponse.currentUser;

      dispatch(receiveAuth(currentUser));
    });
  };
}

function authLogout() {
  return {
    type: actionConstants.AUTH_LOGOUT,
  };
}

function requestAuthLogout() {
  return function(dispatch) {
    dispatch(authLogout());

    qajax({
      url: '/api/session',
      method: 'DELETE',
    });
  };
}

export const actions = {
  addSomeValue: addSomeValue,
  requestAuth: requestAuth,
  receiveAuth: receiveAuth,
  requestAuthLogout: requestAuthLogout,
  authLogout: authLogout,
};
