import { put, call, cancelled } from 'redux-saga/effects';
import { CancelToken } from 'axios';
import { showAlertMessage } from '../actions/toast-message';
/*
 * entity: {request:fn, success:fn, failure:fn}
 * apiFn: api function
 * id: data to pass to apiFn
 *
 * will dispatch the entity actions on request, success and failure of the api
 * */
export default function* fetchEntity(entity, apiFn, id, toast) {
  const source = CancelToken.source();
  yield put(entity.request(id));
  try {
    const { data } = yield call(apiFn, id, source.token);
    yield put(entity.success(id, data));
    if (toast && toast.success) {
      yield put(showAlertMessage(toast.success, 'success'));
    }
  } catch (error) {
    yield put(
      entity.failure(id, {
        error: error.response ? error.response.data : true,
        isError: true,
      }),
    );
    if (toast && toast.error) {
      yield put(showAlertMessage(toast.error, 'error'));
    }
  } finally {
    if (yield cancelled()) {
      yield source.cancel('Request canceled!');
    }
  }
}
