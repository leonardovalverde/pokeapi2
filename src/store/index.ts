import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import { userQueries } from "../services/user/user";
import { pokeapiQueries } from "@/services/pokeapi/pokeapi";

const persistConfig = {
  key: "root",
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    [userQueries.reducerPath]: userQueries.reducer,
    [pokeapiQueries.reducerPath]: pokeapiQueries.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userQueries.middleware, pokeapiQueries.middleware),
});

export const persistor = persistStore(store);
