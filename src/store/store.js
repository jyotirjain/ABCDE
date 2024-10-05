import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import authUserReducer from '../reducer/authUser'
import authAdminReducer from '../reducer/authAdmin'
import authStartupReducer from '../reducer/authStartup'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  authAdmin: authAdminReducer,
  authUser: authUserReducer,
  authStartup: authStartupReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export {persistor};
export default store;
