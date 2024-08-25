import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    filter: filterReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
