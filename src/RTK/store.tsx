import { setupListeners } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./RTKQuery/devQuery";

// import devsHistorySlice from "./slices/devsHistorySlice";
import themeSlice from "./slices/themeSlice";

const reducer = {
  theme: themeSlice,
  [githubApi.reducerPath]: githubApi.reducer,
  // devsHistory: devsHistorySlice,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;
