import React, { ReactNode, createContext, useEffect, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

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

    const retriveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
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
        retriveRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}