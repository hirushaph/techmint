import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterType = {
  priceRange: [number, number] | null;
  selectedCategory: number[];
};

const initialState: FilterType = {
  priceRange: null,
  selectedCategory: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<number>) => {
      const category = action.payload;

      if (state.selectedCategory.includes(category)) {
        state.selectedCategory = state.selectedCategory.filter(
          (item) => item !== category
        );
      } else {
        state.selectedCategory.push(category);
      }
    },
  },
});

export const { setPriceRange, toggleCategory } = filterSlice.actions;

export default filterSlice.reducer;
