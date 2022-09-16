import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import CategoriesSlider from './components/CategoriesSlider';
import CardsContainer from './components/CardsContainer';
import Favorites from './components/Favorites';
import Trending from './components/Trending';

// import Modal from './components/Modal';
import './App.scss'

const App = () => {
    return (
        <div className='App'>  

            <Routes>

                <Route path='/' element = {<Navigate to = '/favorites' />} />
                <Route path='/trending' element = { <TrendingMovies /> } />
                <Route path='/favorites' element = { <FavoriteMovies /> } />
                <Route path='/discovering' element = { <DiscoveringMovies /> } />
                
            </Routes>

        </div> 
    )
}


const DiscoveringMovies = () => {
    

    
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <CategoriesSlider />
                <CardsContainer />
            </Main>
        </>
    )
}

const TrendingMovies = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <CategoriesSlider />
                <Trending />
            </Main>
        </>
    )
}

const FavoriteMovies = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <CategoriesSlider />
                <Favorites />
            </Main>
                
            
        </>
    )
}

export default App;