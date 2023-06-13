import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./features/stories/storiesSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    sidebar: sidebarReducer,
  },
});
