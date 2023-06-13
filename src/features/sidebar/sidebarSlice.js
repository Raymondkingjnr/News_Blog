import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSideBar: (state, action) => {
      state.isOpen = true;
    },
    closeSideBar: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
