import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [thunk,logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
