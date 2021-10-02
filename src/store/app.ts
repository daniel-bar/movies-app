import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as fromAuth from './reducers/auth';

import { watchAuth } from './sagas/auth';

export interface AppState {
  auth: fromAuth.State;
}

const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer: Reducer<AppState> = combineReducers({
  auth: fromAuth.reducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
