export interface FetchAllDogsResponse {
  message: BreedResponse;
  status: string;
}

export interface FetchBreedImageListURLResponse {
  message: string[];
  status: string;
}

export type BreedResponse = {
  [breed: string]: string[];
};

export interface AppDogBreedDetails {
  breedType: string;
  breedSubType?: string;
}

export interface SelectedAppDogBreedDetails extends AppDogBreedDetails {
  breedFullName: string;
}

export type StoreSelectedAppDogBreedDetails =
  | SelectedAppDogBreedDetails
  | undefined;

export type AppDogBreed = {
  [breedName: string]: AppDogBreedDetails;
};
