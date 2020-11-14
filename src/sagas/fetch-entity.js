import { put, call } from 'redux-saga/effects';
/*
 * entity: {request:fn, success:fn, failure:fn}
 * apiFn: api function
 * id: data to pass to apiFn
 *
 * will dispatch the entity actions on request, success and failure of the api
 * */
export default function* fetchEntity(entity, apiFn, id) {
  yield put(entity.request(id));
  try {
    const { data } = yield call(apiFn, id);
    yield put(entity.success(id, data));
  } catch (error) {
    yield put(entity.failure(id, error.response.data));
  }
}
