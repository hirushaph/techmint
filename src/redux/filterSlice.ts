import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterType = {
  priceRange: [number, number] | null;
  selectedCategory: string[];
  selectedBrand: string | null;
};

const initialState: FilterType = {
  priceRange: null,
  selectedCategory: [],
  selectedBrand: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;

      if (state.selectedCategory.includes(category)) {
        state.selectedCategory = state.selectedCategory.filter(
          (item) => item !== category
        );
      } else {
        state.selectedCategory.push(category);
      }
    },
    setBrand: (state, action: PayloadAction<string>) => {
      state.selectedBrand = action.payload;
    },
  },
});

export const { setPriceRange, toggleCategory, setBrand } = filterSlice.actions;

export default filterSlice.reducer;
