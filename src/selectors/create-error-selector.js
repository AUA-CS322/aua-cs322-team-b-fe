import { createSelector } from 'reselect';

const getError = state => state.error;
export default loadActionType => params =>
  createSelector(getError, error => {
    return error[`${loadActionType}_${JSON.stringify(params)}`];
  });
