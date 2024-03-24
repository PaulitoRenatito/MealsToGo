import { ReactNode, createContext, useState } from "react";

interface FavouritesContextProps {
    favourites: any | null;
    addToFavourites: (restaurant: any) => void;
    removeFromFavourites: (restaurant: any) => void;
};
export const FavouritesContext = createContext<FavouritesContextProps | null>(null);

interface FavouritesContextProviderProps {
    children: ReactNode,
}
export const FavouritesContextProvider = ({ children }: FavouritesContextProviderProps) => {

    const [favourites, setFavourites] = useState<any[]>([]);

    const add = (restaurant: any) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant: any) => {
        const newFavourites = favourites.filter(
            (x: any) => x.name !== restaurant.name
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