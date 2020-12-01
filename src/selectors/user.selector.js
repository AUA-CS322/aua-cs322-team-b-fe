import { createSelector } from 'reselect';
import createErrorSelector from './create-error-selector';
import createLoadingSelector from './create-loading-selector';
import getEntities from './entities';
import { loadState } from '../configs/local-storage';
import { signInAction, getUserAction } from '../actions/user.action';

export const userIsAuth = createSelector(getEntities, () => {
  const state = loadState();
  return !!(state && state.accessToken);
});

/*
  User sign in
*/
export const signInData = createSelector(
  getEntities,
  entities => entities.userSignIn,
);
export const signInError = createErrorSelector(signInAction.actionName)();
export const signInLoading = createLoadingSelector(signInAction.actionName)();

/*
  get user
*/
export const getUserData = createSelector(
  getEntities,
  entities => entities.user,
);
export const getUser = createSelector(
  getEntities,
  entities => entities.user?.data || {},
);
export const getUserError = createErrorSelector(getUserAction.actionName)();
export const getUserLoading = createLoadingSelector(getUserAction.actionName)();
