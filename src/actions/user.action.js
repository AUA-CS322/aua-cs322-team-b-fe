import { makeRequestAction } from './index';

export const signInAction = makeRequestAction('SIGN_IN', {
  onSuccess(params, response) {
    return {
      response: {
        entities: {
          userSignIn: response,
          accessToken: response && response.data,
        },
      },
    };
  },
});

export const logOutAction = makeRequestAction('LOG_OUT', {
  onSuccess(params, response) {
    return {
      response: {
        entities: {
          accessToken: response,
        },
      },
    };
  },
});
