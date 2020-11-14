import axios from 'axios';
import { REACT_APP_API_ROOT } from '../configs/env-vars';
import { NOT_AUTHORIZED, NOT_FOUND } from '../constants/statusCodes';
import { getAccessToken, emptyTokenState } from '../configs/local-storage';
import store from '../configs/configure-store';
import { logOutAction } from '../actions/user.action';

const getApiRoot = () => REACT_APP_API_ROOT;
export default () => {
  const service = axios.create({
    baseURL: `${getApiRoot()}api/`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  service.interceptors.response.use(
    response => response,
    error => {
      const errorResponse = error.response;
      switch (errorResponse.status) {
        case NOT_AUTHORIZED:
          emptyTokenState();
          store.dispatch(logOutAction.actions.success({ params: null }, null));
          break;
        case NOT_FOUND:
          window.location.href = '/not-found';
          break;
        default:
          break;
      }
      throw error;
    },
  );
  return service;
};
