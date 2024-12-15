import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingSlice';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
