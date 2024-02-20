import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppDogBreed, StoreSelectedAppDogBreedDetails } from "@/types";
import { fetchAllBreeds } from "./DogStoreThunks";
import { DogsStoreState } from "./dogs-store.types";

const DOGS_INITIAL_STATE: DogsStoreState = { apiState: "pending" };

const DogsStore = createSlice({
  name: "dogsStore",
  initialState: DOGS_INITIAL_STATE,
  reducers: {
    setSelectedBreed: (
      state,
      { payload }: PayloadAction<StoreSelectedAppDogBreedDetails>
    ) => {
      state.selectedBreed = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllBreeds.fulfilled,
        (state, { payload }: PayloadAction<AppDogBreed>) => {
          state.allBreeds = payload;
          state.apiState = "succeeded";
        }
      )
      .addCase(fetchAllBreeds.rejected, (state) => {
        state.apiState = "failed";
      });
  },
});

export const DogsStoreReducer = DogsStore.reducer;
export const { setSelectedBreed } = DogsStore.actions;
