import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../utils/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
