import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/auth-slice";
import { contacts } from "./contacts/contacts-reducer";
import { mySliceFilter } from "./Filter/FilterSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  serializableCheck: false,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts,
    filter: mySliceFilter.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
