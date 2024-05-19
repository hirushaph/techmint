import { createSlice } from '@reduxjs/toolkit';

type SettingType = {
  darkmode: boolean;
};

function getInitialState(): SettingType {
  const theme = JSON.parse(localStorage.getItem('darkmode')!);
  return {
    darkmode: theme,
  };
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState: getInitialState(),
  reducers: {
    toggleDarkMode: (state) => {
      state.darkmode = !state.darkmode;
      localStorage.setItem('darkmode', JSON.stringify(state.darkmode));
    },
  },
});

export const { toggleDarkMode } = settingSlice.actions;

export default settingSlice.reducer;
