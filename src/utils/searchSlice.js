import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return (state = { ...state, ...action.payload }); //have to return to avoid mutating the state directly.

      // Object.assign(state, action.payload); // is allowed because immer library directly mutate the state here
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
