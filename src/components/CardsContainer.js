import './CardsContainer.css';
import Card from './Card.js';
import {getMovies} from '../services';
import { useEffect } from 'react';

function CardsContainer(){

    console.log(getMovies())

    useEffect(()=> {
        console.log('hello')   
    }, [])

    return(
        <div className='cards-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardsContainer;