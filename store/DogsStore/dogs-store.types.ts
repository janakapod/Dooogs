import { AppDogBreed, SelectedAppDogBreedDetails } from "@/types";

export interface DogsStoreState {
  allBreeds?: AppDogBreed;
  apiState: "pending" | "succeeded" | "failed";
  selectedBreed?: SelectedAppDogBreedDetails;
}

export enum DogStoreThunks {
  fetchAllBreeds = "FETCH_ALL_BREEDS",
}
