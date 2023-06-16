import { configureStore } from '@reduxjs/toolkit';
import {applyMiddleware}   from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [...applyMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
