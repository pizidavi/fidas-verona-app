// Redux
import authReducer from './authSlice';
import configReducer from './configSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  config: configReducer,
});
