import { AppDogBreed, BreedResponse } from "@/types";
import { capitalize } from "lodash";


export const dogTypeMapper = (breedData: BreedResponse): AppDogBreed => {
    return Object.keys(breedData).reduce<AppDogBreed>((previousData, mainBreedType) => {
        const mainBreedName = capitalize(mainBreedType)
        const subBreeds = breedData[mainBreedType];
        if (subBreeds.length) {
            subBreeds.forEach((subBreedType) => {
                previousData[capitalize(subBreedType) + " " + mainBreedName] = {
                    breedType: mainBreedType,
                    breedSubType: subBreedType
                }
            })
        } else {
            previousData[mainBreedName] = {
                breedType: mainBreedType,

            }
        }
        return previousData
    }, {})
}