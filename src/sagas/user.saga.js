import { signInAction, getUserAction } from '../actions/user.action';
import { signInApi, getUserApi } from '../services/user.service';
import {
  signInData,
  signInError,
  getUserData,
  getUserError,
} from '../selectors/user.selector';
import { call, select } from 'redux-saga/effects';
import showMessage from '../utils/message';

export const watchSignIn = {
  ...signInAction,
  api: signInApi,
  *load(fetch, data) {
    yield call(fetch, { ...data });
    const response = yield select(signInData);
    const actionError = yield select(signInError);
    if (response && response.success && !actionError.isError) {
      return;
    }
    showMessage(response && response.message, 'error');
  },
};

export const watchGetUser = {
  ...getUserAction,
  api: getUserApi,
  *load(fetch, data) {
    yield call(fetch, { ...data });
    const response = yield select(getUserData);
    const actionError = yield select(getUserError);
    console.log(response);
    if (response && response.success && !actionError.isError) {
      return;
    }
    showMessage(response && response.message, 'error');
  },
};
