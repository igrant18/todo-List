import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import postsReducer from './postsReducers'
import navBarReducer from './navBarReducer';
import paginationReducer from './paginationReducer';

export default configureStore({
  middleware: [thunkMiddleware],
  reducer: {
    postsReducer: postsReducer,
    navBarReducer: navBarReducer,
    paginationReducer: paginationReducer
  } 
});