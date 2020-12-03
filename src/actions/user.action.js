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

export const getUserAction = makeRequestAction('GET_USER', {
  onSuccess(params, response) {
    return {
      response: {
        entities: {
          user: response,
        },
      },
    };
  },
});

export const searchUserAction = makeRequestAction('SEARCH_USER', {
  onSuccess(params, response) {
    return {
      response: {
        entities: {
          userSearch: response,
        },
      },
    };
  },
});
