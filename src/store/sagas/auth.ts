import { ForkEffect, put, takeEvery, race, delay, take, CallEffect, TakeEffect } from 'redux-saga/effects';

import * as authActions from '../actions/auth';

// --- Workers (Effects) --- //

function* loginSaga() {
  const logoutTimeoutCreationDate: string | null = yield localStorage.getItem('logoutTimeoutCreationDate');

  let logoutTimeout: number;

  if (!logoutTimeoutCreationDate || +logoutTimeoutCreationDate + 5000 < new Date().getTime()) {
    yield localStorage.setItem('logoutTimeoutCreationDate', new Date().getTime().toString());

    logoutTimeout = yield 5000;
  } else {
    logoutTimeout = yield +logoutTimeoutCreationDate + 5000 - new Date().getTime();
  }
  
  const [ delayAction ]: [CallEffect, TakeEffect] = yield race<CallEffect | TakeEffect>([
    delay(logoutTimeout),
    take(authActions.AUTH_LOGOUT),
  ]);

  if (delayAction) {
    yield put(authActions.logout());
  }
}

function* logoutSaga() {
  yield sessionStorage.removeItem('token');
  yield localStorage.removeItem('logoutTimeoutCreationDate');
}

// --- Watchers --- //

export function* watchAuth():IterableIterator<ForkEffect>{
  yield takeEvery(authActions.AUTH_LOGIN, loginSaga);
  yield takeEvery(authActions.AUTH_LOGOUT, logoutSaga);
}