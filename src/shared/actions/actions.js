import { createAction } from 'redux-actions';

export const addSomeValue = createAction('ADD_SOME_VALUE');

export const addValueAsync = createAction('ADD_VALUE_ASYNC', (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'cats') {
        reject('Cannot add "cats" :(');
      } else {
        resolve(value);
      }
    }, 1000);
  });
});

export const setError = createAction('SET_ERROR');
