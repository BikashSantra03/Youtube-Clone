import { createSlice } from "@reduxjs/toolkit";
import { OFFSET } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Check if the message with the same chatID already exists
      const exists = state.messages.some(
        (msg) => msg.chatID === action.payload.chatID
      );

      if (!exists) {
        // Add the new message only if it doesn't exist
        state.messages.unshift(action.payload);

        if (state.messages.length > OFFSET) {
          state.messages.pop(); // Remove the oldest message
        }
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
