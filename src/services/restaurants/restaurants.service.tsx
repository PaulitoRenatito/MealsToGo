import { mocks } from "./mock";
import camelize, { Camelize } from "camelize-ts";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
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
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        }
    });
    return camelize(mappedResults);
}