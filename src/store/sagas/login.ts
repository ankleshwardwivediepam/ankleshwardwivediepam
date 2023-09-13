import {put} from 'redux-saga/effects';
import {emailLoginSuccess} from '../actions/login';

export function* emailLoginSaga() {
  yield put(emailLoginSuccess);
}
