import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './settingSlice';

export const store = configureStore({
  reducer: {
    setting: settingReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
