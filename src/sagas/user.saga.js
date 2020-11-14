import { signInAction } from '../actions/user.action';
import { signInApi } from '../services/user.service';
import { signInData, signInError } from '../selectors/user.selector';
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
