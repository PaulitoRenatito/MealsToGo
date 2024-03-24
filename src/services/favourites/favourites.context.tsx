import { ReactNode, createContext, useState } from "react";
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