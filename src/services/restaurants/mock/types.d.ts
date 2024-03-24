import { LatLng } from "../../location/types";

export type BusinessStatus = "OPERATIONAL" | "CLOSED_TEMPORARILY";

interface OpeningHours {
    open_now: boolean;
}

export interface Restaurant {
    name: string;
    vicinity: string;
    rating: number;
    photos: string[]; // Pode ser alterado conforme a estrutura real das fotos
    opening_hours: OpeningHours;
    business_status: string;
    geometry: {
        location: LatLng;
    };
}

export interface RestaurantMockData {
    results: Restaurant[];
}