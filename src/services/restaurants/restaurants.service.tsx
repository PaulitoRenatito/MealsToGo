import { mocks, mocksImages } from "./mock";
import camelize, { Camelize } from "camelize-ts";
import { Restaurant, RestaurantMockData } from "./mock/types";

export const restaurantsRequest = (location: any): Promise<RestaurantMockData> => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];

        if (!mock) {
            reject("not found");
        }
        
        resolve(mock);
    })
}

export const restaurantsTransform = (data: RestaurantMockData): any => {
    const { results = [] } = data;
    const mappedResults = results.map((restaurant: Restaurant) => {

        restaurant.photos = [mocksImages[Math.ceil(Math.random() * mocksImages.length - 1)]];

        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    });

    return camelize(mappedResults);
}