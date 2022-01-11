import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    hoverData: null,
    field: ``,
  },
  reducers: {
    setHoverData: (state, action) => {
      state.hoverData = action.payload;
    },
    changeColorSquare: (state, action) => {
      const oldMeaning =
        state.hoverData[action.payload.row][action.payload.index];
      state.hoverData[action.payload.row].splice(
        action.payload.index,
        1,
        !oldMeaning
      );
    },
    setField: (state, action) => {
      state.field = action.payload;
    },
  },
});

export const { setHoverData, changeColorSquare, setField } = boardSlice.actions;

export default boardSlice.reducer;
