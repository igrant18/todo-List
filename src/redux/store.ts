import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import postsReducer from './postsReducers'
import navBarReducer from './navBarReducer';
import paginationReducer from './paginationReducer';

const logger = createLogger();
export default configureStore({
  middleware: [thunkMiddleware, logger],
  reducer: {
    postsReducer: postsReducer,
    navBarReducer: navBarReducer,
    paginationReducer: paginationReducer
  } 
});