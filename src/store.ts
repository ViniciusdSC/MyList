import {combineReducers, createStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import cartReducer from 'cart/store';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import currentEstablishmentReducer from 'core/store/current-establishment';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  currentEstablishment: currentEstablishmentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
