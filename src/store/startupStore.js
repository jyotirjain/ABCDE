import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import authStartupReducer from '../reducer/authStartup'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedStartupReducer = persistReducer(persistConfig, combineReducers({
  authStartup: authStartupReducer,
}));

const startupStore = configureStore({
  reducer: persistedStartupReducer,
});

const startupPersistor = persistStore(startupStore);
export {startupPersistor};
export default startupStore;
