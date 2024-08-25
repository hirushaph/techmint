import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterType = {
  priceRange: [number, number] | null;
};

const initialState: FilterType = {
  priceRange: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
