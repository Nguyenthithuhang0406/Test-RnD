import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import selectedItemSlice from "./selectedItemSlice";
import selectedItemEditStyleSlice from "./selectedItemEditStyleSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, selectedItemSlice);

let store = configureStore({
  reducer: {
    selectedItem: persistedReducer,
    selectedItemEditStyle: selectedItemEditStyleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

let persistor = persistStore(store);
export { store, persistor };