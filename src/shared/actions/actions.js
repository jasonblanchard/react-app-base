export const actionConstants = {
  ADD_SOME_VALUE: 'ADD_SOME_VALUE',
};

export function addSomeValue(value) {
  return {
    type: actionConstants.ADD_SOME_VALUE,
    value,
  };
}

export const actions = {
  addSomeValue: addSomeValue,
};
