import actionConstants from 'app/shared/actions/constants';

export function addSomeValue(value) {
  return {
    type: actionConstants.ADD_SOME_VALUE,
    value,
  };
}
