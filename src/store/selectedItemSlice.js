import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const  item = action.payload;
      let newY = 0;
      if (state.selectedItems.length > 0) {
        const lastItem = state.selectedItems[state.selectedItems.length - 1];
        const lastItemHeight = lastItem.height === 200 ? lastItem.height : parseInt(lastItem.height.replace("px", ""));
        newY = lastItem.y + lastItemHeight + 50;
      }
      let count = 0;
      state.selectedItems.map((i) => {
        if (i.name === item.name) {
          count++;
        }
      });
      state.selectedItems.push({
        ...item,
        x: 0,
        y: newY,
        width: "200px",
        height: "200px",
        id: `${item.id} - ${count + 1}`,
      });
    },
    updateItem: (state, action) => {
      const item = action.payload;
      state.selectedItems = state.selectedItems.map((i) =>
        i.id === item.id ? { ...i, ...item } : i
      );
    },
  },
});

export const { addItem, updateItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;