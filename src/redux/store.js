import { configureStore } from "@reduxjs/toolkit";

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
import storage from "redux-persist/lib/storage";

import { videoApi } from "./videoApi";

const persistConfig = {
  key: "video",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, videoApi.reducer);

export const store = configureStore({
  reducer: {
    video: persistedReducer,
    [videoApi.reducerPath]: videoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(videoApi.middleware),
});

export const persistor = persistStore(store);
