import { ReactNode, createContext, useEffect, useState } from "react";
import { LatLng, LocationData, LocationKey } from "./types";
import { locationRequest, locationTransform } from "./location.service";

interface LocationContextType {
    location: LocationData | null;
    isLoading: boolean;
    error: any;
    search: (searchKeyword: string) => void;
    keyword: string;
};
export const LocationContext = createContext<LocationContextType | null>(null);

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {

    const [location, setLocation] = useState<LocationData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [keyword, setKeyword] = useState<string>("san francisco");

    const onSearch = (searchKeyword: string) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {

        if (!keyword.length) return;

        locationRequest(keyword.toLowerCase().trim() as LocationKey)
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);

            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });

    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{
                location,
                isLoading,
                error,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}