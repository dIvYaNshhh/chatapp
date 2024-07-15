// types.ts
import { combineReducers } from "@reduxjs/toolkit";
import messageReducer, { MessageState } from "./message";
import savedReducer, { SavedChatState } from "./savedChat";

export interface RootState {
  message: MessageState;
  savedChat: SavedChatState;
}

export const rootReducer = combineReducers({
  message: messageReducer,
  savedChat: savedReducer,
});
