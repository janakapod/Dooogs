import {
  FetchAllDogsResponse,
  FetchBreedImageListURLResponse,
  SelectedAppDogBreedDetails,
} from "@/types";
import { AxiosService } from "./AxiosService";

const DOG_BASE_URL = "https://dog.ceo/api";
const DOG_RANDOM_URL_SUFFIX = "/random";

const DOG_URL = {
  allList: "/breeds/list/all",
  getRandomImage: "/image" + DOG_RANDOM_URL_SUFFIX,

  getRandomImagesOfABreed: "/breed/$1/images/random/$2",
};

const axiosServiceInstance = new AxiosService({
  baseURL: DOG_BASE_URL,
});

const getRandomBreedImageListUrl = (
  selectedBreed: SelectedAppDogBreedDetails,
  numberOfImages: number
) => {
  // return `/${selectedBreed.breedType}${
  //   selectedBreed.breedSubType ? "/" + selectedBreed.breedSubType : ""
  // }${DOG_URL.getRandomImagesOfABreed + numberOfImages}`;

  return DOG_URL.getRandomImagesOfABreed
    .replace(
      "$1",
      `${selectedBreed.breedType}${
        selectedBreed.breedSubType ? "/" + selectedBreed.breedSubType : ""
      }`
    )
    .replace("$2", String(numberOfImages));
};

export const DogService = {
  getAllDogs() {
    return axiosServiceInstance.get<FetchAllDogsResponse>(DOG_URL.allList);
  },

  getRandomImageListOfBreed(
    selectedBreed: SelectedAppDogBreedDetails,
    numberOfImages: number
  ) {
    return axiosServiceInstance.get<FetchBreedImageListURLResponse>(
      getRandomBreedImageListUrl(selectedBreed, numberOfImages)
    );
  },
};
