import { createAsyncThunk } from "@reduxjs/toolkit";
import { DogStoreThunks } from "./dogs-store.types";
import { DogService } from "@/services/DogService";
import { dogTypeMapper } from "@/utils/DogTypeMapper";
import { AppDogBreed } from "@/types";

export const fetchAllBreeds = createAsyncThunk<AppDogBreed>(
  DogStoreThunks.fetchAllBreeds,
  async () => {
    const response = await DogService.getAllDogs();
    return dogTypeMapper(response.data.message);
  }
);
