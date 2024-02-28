import React, { ReactNode, createContext, lazy, useContext, useEffect, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

interface RestaurantsContextType {
    restaurants: any[];
    isLoading: boolean;
    error: any;
};
export const RestaurantsContext = createContext<RestaurantsContextType | null>(null);

export const RestaurantsContextProvider = ({ children }: { children: ReactNode }) => {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const { location } = useContext(LocationContext)!;

    const retriveRestaurants = (locationRes: string) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(locationRes)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch(error => {
                    setIsLoading(false);
                    setError(error);
                });
        }, 2000);
    }

    useEffect(() => {
        if (!location) return;
        const locationString = `${location.lat},${location.lng}`;
        retriveRestaurants(locationString);
    }, [location]);

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}