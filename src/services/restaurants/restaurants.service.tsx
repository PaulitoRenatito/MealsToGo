import { mocks, mocksImages } from "./mock";
import camelize, { Camelize } from "camelize-ts";

export const restaurantsRequest = (location: any) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];

        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    })
}

export const restaurantsTransform = (data: any): any => {
    const { results = [] } = data;
    const mappedResults = results.map((restaurant: any) => {

        restaurant.photos = [mocksImages[Math.ceil(Math.random() * mocksImages.length - 1)]];

        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    });
    return camelize(mappedResults);
}