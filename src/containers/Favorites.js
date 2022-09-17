import { useEffect } from "react";
import Card from "./../components/Card";

const Favorites = () => {
    let favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
        favorites.push( JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(favorites)

    useEffect(()=> {
        console.log('ejecutando useEffect...')
    })

    return (
        <>
            <div id='cards-container' className='cards-container'>
            {
                favorites.length > 0 &&
                    favorites.map((f, i) => {
                        return <Card
                                movie={f}
                                key={f.id}
                                basePath='https://image.tmdb.org/t/p/w300/'
                                //handleClick={handleClick}
                        />
                    })
            }
            </div>
        </>
    )

}
export default Favorites;