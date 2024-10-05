import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import authAdminReducer from '../reducer/authAdmin'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  authAdmin: authAdminReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export {persistor};
export default store;
