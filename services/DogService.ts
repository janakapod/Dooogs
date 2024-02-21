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

/**
 * Generates a URL for a list of random images of a selected dog breed.
 *
 * @param {SelectedAppDogBreedDetails} selectedBreed - the details of the selected dog breed
 * @param {number} numberOfImages - the number of images to retrieve
 * @return {string} the URL for the list of random images of the selected dog breed
 */
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
  /**
   * A function to retrieve names of the all dog breeds.
   *
   * @return {FetchAllDogsResponse} response from fetching all dogs
   */
  getAllDogs() {
    return axiosServiceInstance.get<FetchAllDogsResponse>(DOG_URL.allList);
  },

  /**
   * Get a random list of image URLs of a specific breed.
   *
   * @param {SelectedAppDogBreedDetails} selectedBreed - the selected dog breed details
   * @param {number} numberOfImages - the number of images to fetch
   * @return {Promise<FetchBreedImageListURLResponse>} a promise containing the fetched breed image list URL response
   */
  getRandomImageListOfBreed(
    selectedBreed: SelectedAppDogBreedDetails,
    numberOfImages: number
  ) {
    return axiosServiceInstance.get<FetchBreedImageListURLResponse>(
      getRandomBreedImageListUrl(selectedBreed, numberOfImages)
    );
  },
};
