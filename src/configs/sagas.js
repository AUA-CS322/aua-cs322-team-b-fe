import { takeLatest, call } from 'redux-saga/effects';
import fetchEntity from './fetch-entity';

/**
 * Make saga
 * @param actions
 * @param actionName
 * @param cancelActionName
 * @param api
 * @param load function* (fetch, data) {
 *               yield call(fetch, data);
 *             }
 * @param take { takeLatest, takeEvery }
 * @param toast { text: 'show alert message', type: 'success' }
 * @returns {Function}
 */
export const makeSaga = ({
  actions,
  actionName,
  cancelActionName,
  api,
  load = null,
  take = takeLatest,
  toast = {},
  ms = false,
}) => {
  const fetch = fetchEntity.bind(null, actions, api);
  function* loadRequest(data) {
    yield call(fetch, data, toast);
  }
  return function* () {
    let watcher;
    if (ms === false) {
      watcher = yield take(
        actionName,
        load === null ? loadRequest : load.bind(null, fetch),
      );
    } else {
      watcher = yield take(
        ms,
        actionName,
        load === null ? loadRequest : load.bind(null, fetch),
      );
    }
    if (cancelActionName && ms === false) {
      yield take(cancelActionName, function* () {
        yield watcher.cancel();
      });
    }
  };
};
