import { useEffect } from 'react';
import { useState } from 'react';
import { Category } from '../components/Category';
import './Categories.scss';


export const Categories = ({categories, setMode, updateCategories}) => {
    
    return (
        <div className='categories'>
            
            <section className='categories-container'>
                
                {
                    categories.length > 0 && categories.map( category => {
                        return <Category 
                            key={category.id}
                            category={category}
                            updateCategories={updateCategories} 
                        />
                    })
                }
            </section>
            <button onClick={()=> setMode('movies') }>Show movies</button>    
        </div>
        
    )
}

/*
export const Categories = () => {
    
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([{id:1, title: 'Drama'}, {id:2, title: 'Terror'}, {id:3, title: 'Romance'}])
    const handleClick = () => {
        //alert('Changing selectedCategories state')
        console.log('Showing selected', selectedCategories)
    };

    useEffect(()=> {
        console.log(selectedCategories);
    }, [selectedCategories])

    return (
        <div className='categories'>
            <div className='categories-container'>
                {
                    categories && categories.map( category => {
                        return <Category key={category.id} category={category} setSelectedCategories={setSelectedCategories} />
                    })
                        
                }
            </div>
            <button onClick={handleClick}>
                Show results
            </button>
        </div>
    )
}

*/