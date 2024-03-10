import { locations } from "./location.mock"
import camelize, { Camelize } from "camelize-ts";
import { LatLng, LocationData, LocationKey } from "./types";

export const locationRequest = (searchTerm: LocationKey): Promise<LocationData> => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock);
    })
}

export const locationTransform = (result: LocationData): LocationData => {
    const formattedResonse = camelize(result);
    const { geometry } = formattedResonse.results[0];

    const { location, viewport } = geometry;

    const transformedData: LocationData = {
        results: [{
            geometry: {
                location: location,
                viewport: viewport
            }
        }]
    };

    return transformedData;
};
