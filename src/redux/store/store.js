import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/auth-slice";
import { contacts } from "./contacts/contacts-reducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
