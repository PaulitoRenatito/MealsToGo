import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restaurant } from "../restaurants/mock/types";
import { AuthenticationContext } from "../authentication/authentication.context";

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

    const { user } = useContext(AuthenticationContext)!;

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

    const storeFavourites = async (favourites: Restaurant[], uid: string) => {
        try {
            const jsonValue = JSON.stringify(favourites);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
            console.log("Error storing: ", e);
        }
    }

    const loadFavourites = async (uid: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (jsonValue !== null) {
                setFavourites(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.log("Error loading: ", e);
        }
    };

    useEffect(() => {
        if (user) {
            loadFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            storeFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

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