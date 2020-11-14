import { all, fork } from 'redux-saga/effects';
import { makeSaga } from '../configs/sagas';
import * as user from './user.saga';

const combinedSagas = {
  ...user,
  // import and desctructure all sagas here
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(i => fork(makeSaga(i))));
}
