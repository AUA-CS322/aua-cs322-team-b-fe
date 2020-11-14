import { combineReducers } from 'redux';
import entities from './entities';
import loading from './loading';
import error from './error';

const appReducer = combineReducers({
  entities,
  loading,
  error,
  // add other reducers here
});

export default (state, action) => appReducer(state, action);
