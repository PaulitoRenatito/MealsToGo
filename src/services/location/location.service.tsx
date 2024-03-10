import { locations } from "./location.mock"
import camelize, { Camelize } from "camelize-ts";
import { LatLng, LocationData, LocationKey, LocationMockData } from "./types";

export const locationRequest = (searchTerm: LocationKey): Promise<LocationMockData> => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    })
}

export const locationTransform = (result: LocationMockData): LocationData => {
    const formattedResonse = camelize(result);
    const { geometry } = formattedResonse.results[0];

    const { location, viewport } = geometry;

    const transformedData: LocationData = {
        location: location,
        viewport: viewport
    };

    return transformedData;
};
