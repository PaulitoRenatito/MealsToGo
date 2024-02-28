
export type LocationKey = "antwerp" | "san francisco" | "chicago" | "toronto";

export type LatLng = { lat: number; lng: number; };

export interface LocationData {
    results: {
        geometry: {
            location: LatLng;
            viewport: {
                northeast: LatLng;
                southwest: LatLng;
            };
        };
    }[];
}