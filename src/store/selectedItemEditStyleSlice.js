import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItemEditStyle: {},
};

const selectedItemEditStyleSlice = createSlice({
  name: "selectedItemEditStyle",
  initialState,
  reducers: {
    selectedItemEditStyle: (state, action) => {
      state.selectedItemEditStyle = action.payload;
    },
    updateStyle: (state, action) => {
      const { name, value } = action.payload;
      if (state.selectedItemEditStyle) {
        state.selectedItemEditStyle = {
          ...state.selectedItemEditStyle,
          [name]: value,
        };
      }
    },
  },
});

export const { updateStyle, selectedItemEditStyle } = selectedItemEditStyleSlice.actions;

export default selectedItemEditStyleSlice.reducer;