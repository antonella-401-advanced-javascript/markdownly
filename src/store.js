/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';

const loggerMiddleware = store => next => action => {
  console.log('in my logger', action, store.getState());

  next(action);

  console.log('current state', store.getState());
};

export default createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware
  )
);
