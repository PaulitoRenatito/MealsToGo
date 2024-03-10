
export type LocationKey = "antwerp" | "san francisco" | "chicago" | "toronto";

export type LatLng = { lat: number; lng: number; };
export type Viewport = { northeast: LatLng; southwest: LatLng; };

export interface LocationData {
    results: {
        geometry: {
            location: LatLng;
            viewport: Viewport;
        };
    }[];
}