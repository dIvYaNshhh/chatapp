import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id: number; // Assuming each message has a unique ID
  aiMessage?: string;
  userMessage?: string;
}

export interface MessageState {
  chat: Message[];
  mode: string;
  messageLength: string;
}

const initialState: MessageState = {
  chat: [],
  mode: "Guide",
  messageLength: "100",
};

let nextId = 0;

export const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    userChat: (state, action: PayloadAction<string>) => {
      state.chat = [
        ...state.chat,
        {
          id: nextId++,
          userMessage: action.payload,
        },
      ];
    },
    aiChat: (state, action: PayloadAction<string>) => {
      state.chat = [
        ...state.chat,
        {
          id: nextId++,
          aiMessage: action.payload,
        },
      ];
    },
    updateMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
    updateMessageLength: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { userChat, aiChat, updateMode, updateMessageLength } =
  MessageSlice.actions;

export default MessageSlice.reducer;
