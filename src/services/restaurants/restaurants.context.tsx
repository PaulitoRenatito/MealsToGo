import React, { ReactNode, createContext } from "react";


export const RestaurantsContext = createContext<any | null>(null);

export const RestaurantsContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
            {children}
        </RestaurantsContext.Provider>
    )
}