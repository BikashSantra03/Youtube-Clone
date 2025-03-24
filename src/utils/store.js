import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../utils/appSlice";
import searchSlice from "../utils/searchSlice";
import chatSlice from "../utils/chatSlice"
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice
  },
});

export default store;
