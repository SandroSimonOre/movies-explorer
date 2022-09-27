import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ( {children} ) => {

    const [ favorites, setFavorites ] = useState(JSON.parse(localStorage.getItem('favorites')));

    const updateFavorites = ( newItem ) => {
        
        setFavorites(previous => previous.concact(newItem));
    }

    useEffect( ()=> {

        localStorage.setItem('favorites', JSON.stringify(favorites));
    
    }, [ favorites ])

    return (
        <FavoritesContext.Provider value = { { favorites, updateFavorites } }>
            {children}
        </FavoritesContext.Provider>        
    )
}