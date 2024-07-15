// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./type";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["savedChat"], // Add the slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// const store = configureStore({
//   reducer: rootReducer,
// });

// export type AppDispatch = typeof store.dispatch;
// export default store;
