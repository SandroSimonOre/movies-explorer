import { useState } from 'react';
//import { Category } from '../components/Category';
import {Categories} from './Categories';
import { Movies } from './Movies';
import './Discover.scss';
import { useEffect } from 'react';
import { searchMovies } from '../services/getAPIData';

export const Discover = () => {
    const [mode, setMode] = useState('categories');
    const [categories, setCategories] = useState([{id:0, name:'All', selected: true, index:0}]);

    useEffect(()=> {
        const loadData = async () => {
            const response = await searchMovies('genre/movie/list');
            setCategories(previous => previous.concat(response.data.genres.map( (e, i) => {
                return { id: e.id, name: e.name, selected: false, index: i+1 }
            })));
        }
        loadData();

    }, [])

    const updateCategories = (category) => {
        
        if (category.id === 0 )/* && category.selected === false) */ {
            
            setCategories( previous => {
            
                return [
                    {id:0, name:'All', selected: !category.selected, index:0},
                    ...previous.filter(e => ( e.id !== 0  )).map(e => ({...e, selected:false }))
                ].sort( (a, b ) => a.index - b.index)
                
            })
            
        } else if (category.id > 0) {
            
            setCategories(previous => {

                return [
                    {id:0, name:'All', selected: false, index:0},
                    ...previous.filter(e => (e.id !== category.id  && e.id !== 0  )),
                    {...category, selected: !category.selected}
                ].sort( (a, b ) => a.index - b.index)
                
            })
        }
         
    }

    return (
        
        <div className='discover'>
            {
                mode === 'categories' 
                ? <Categories categories = {categories} setMode = {setMode} updateCategories = { updateCategories } /> 
                : (mode === 'movies' ) && <Movies categories={categories} setMode = {setMode} /> 
            }
            
        </div>
            
    )
}