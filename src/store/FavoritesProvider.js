import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ( {children} ) => {

    const [ favorites, setFavorites ] = useState(() => {

        let tempArray = [];
            for (let i = 0; i < localStorage.length; i++) {
                tempArray.push( JSON.parse(localStorage.getItem(localStorage.key(i))));
            };
            if (tempArray) {
                tempArray.sort((a, b) => b.timeStamp - a.timeStamp);
            }
            return tempArray;
        });

    const addFavorite = newFavorite  => {
        
        const favorite = {
            id:newFavorite.id,
            title: newFavorite.title,
            genres: newFavorite.genres,
            overview: newFavorite.overview,
            poster_path: newFavorite.poster_path,
            release_date: newFavorite.release_date,
            vote_average: newFavorite.vote_average,
            timeStamp: Date.now()
        };
        setFavorites(previous => {
            return [
                ...previous,
                favorite
            ].sort((a, b) => b.timeStamp - a.timeStamp);
        });
        localStorage.setItem(newFavorite.id, JSON.stringify(favorite) )
    }

    const removeFavorite =  favoriteId  => {
        setFavorites( previous => previous.filter( item => item.id !== favoriteId ));
        localStorage.removeItem(favoriteId);
    }

    const isFavorite = favoriteId => {

        return favorites.some( e => e.id === favoriteId);
    };
    
    return (
        <FavoritesContext.Provider value = { { favorites, addFavorite, removeFavorite, isFavorite } }>
            {children}
        </FavoritesContext.Provider>        
    )
}