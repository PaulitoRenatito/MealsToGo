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

export const locationTransform = (result: LocationData): LatLng => {
    const formattedResonse = camelize(result);
    const { geometry } = formattedResonse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
};
