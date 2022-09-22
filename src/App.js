import { Routes, Route, Navigate } from "react-router-dom";
import {Header} from './components/Header';
import {Sidebar} from './containers/Sidebar';
import {Main} from './containers/Main';

import {Discovering} from './containers/Discovering';
import {Favorites} from './containers/Favorites';
import {Trending} from './containers/Trending';
import {Searching} from "./containers/Searching";

import './App.scss'

export const App = () => {
    return (
        <div id='app' className='app'>  

            <Routes>

                <Route exact path='/' element = {<Navigate to = '/favorites' />} />
                <Route exact path='/favorites' element = { <FavoriteComponent /> } />
                <Route exact path='/trending' element = { <TrendingComponent /> } />
                <Route exact path='/discovering' element = { <DiscoveringComponent /> } />
                <Route exact path='/search' element = { <SearchingComponent /> } />
                
            </Routes>

        </div> 
    )
}


const DiscoveringComponent = () => {
    
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                {/* <CategoriesSlider /> */}
                <Discovering />
            </Main>
        </>
    )
}

const TrendingComponent = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                {/* <CategoriesSlider /> */}
                <Trending />
            </Main>
        </>
    )
}

const FavoriteComponent = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                {/* <CategoriesSlider /> */}
                <Favorites />
            </Main>
            
        </>
    )
}

const SearchingComponent = () => {
    
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <Searching key='ola' />
            </Main>
            
        </>
    )
}