import { createAction } from 'redux-actions';

const addSomeValue = createAction('ADD_SOME_VALUE');
const addValueAsync = createAction('ADD_VALUE_ASYNC', (value) => {
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

const setError = createAction('SET_ERROR');

export const actions = {
  addSomeValue,
  addValueAsync,
  setError,
};
