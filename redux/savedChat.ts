import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SavedChat {
  id: number;
  chat: string;
}
export interface SavedChatState {
  chat: SavedChat[];
}

const initialSavedChatState: SavedChatState = {
  chat: [],
};

let nextSavedId = 0;

export const savedChat = createSlice({
  name: "savedChat",
  initialState: initialSavedChatState,
  reducers: {
    saveChat: (state, action: PayloadAction<string>) => {
      state.chat = [
        ...state.chat,
        {
          id: nextSavedId++,
          chat: action.payload,
        },
      ];
    },
  },
});

export const { saveChat } = savedChat.actions;

export default savedChat.reducer;
