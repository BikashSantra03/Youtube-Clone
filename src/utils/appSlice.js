import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isSideContainerOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeSideContainer: (state) => {
      state.isSideContainerOpen = false;
    },
    openSideContainer: (state) => {
      state.isSideContainerOpen = true;
    },
  },
});

export const { toggleMenu, closeSideContainer, openSideContainer } = appSlice.actions;
export default appSlice.reducer;
