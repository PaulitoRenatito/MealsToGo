import { ReactNode, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restaurant } from "../restaurants/mock/types";

interface FavouritesContextProps {
    favourites: Restaurant[] | null;
    addToFavourites: (restaurant: Restaurant) => void;
    removeFromFavourites: (restaurant: Restaurant) => void;
};
export const FavouritesContext = createContext<FavouritesContextProps | null>(null);

interface FavouritesContextProviderProps {
    children: ReactNode,
}
export const FavouritesContextProvider = ({ children }: FavouritesContextProviderProps) => {

    const [favourites, setFavourites] = useState<Restaurant[]>([]);

    const add = (restaurant: Restaurant) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant: Restaurant) => {
        const newFavourites = favourites.filter(
            (x: Restaurant) => x.name !== restaurant.name
        );

        setFavourites(newFavourites);
    }

    const storeFavourites = async (favourites: Restaurant[]) => {
        try {
            const jsonValue = JSON.stringify(favourites);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log("Error storing: ", e);
        }
    }

    const loadFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites');
            if(jsonValue !== null) {
                setFavourites(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.log("Error loading: ", e);
        }
    };

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        storeFavourites(favourites);
    }, [favourites]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
}