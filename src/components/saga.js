import { AGE_UP, ageUp } from './actions';
// import { delay } from 'redux-saga';
import { delay, put, takeLatest } from 'redux-saga/effects'

function* age_up() {
  yield delay(3000);

  yield put(ageUp());
}

export function* watcher() {
  yield takeLatest("age_up", age_up)
}