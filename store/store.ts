import { configureStore } from "@reduxjs/toolkit";
import { DogsStoreReducer } from "./DogsStore/DogsStore";

export const store = configureStore({
  reducer: {
    dogsStore: DogsStoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
