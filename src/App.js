import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './containers/Sidebar';
import Main from './containers/Main';
import CategoriesSlider from './containers/CategoriesSlider';
import CardsContainer from './containers/CardsContainer';
import Favorites from './containers/Favorites';
import Trending from './containers/Trending';
import Recommendations from "./containers/Recommendations";
import SearchResults from "./containers/SearchResults";
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
                <Route path='/recommendations' element = { <RecommendationsMovies /> } />
                <Route path='/search' element = { <SearchMovies /> } />
                
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

const RecommendationsMovies = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <CategoriesSlider />
                <Recommendations />
            </Main>
                
            
        </>
    )
}

const SearchMovies = () => {
    
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                <CategoriesSlider />
                <SearchResults />
            </Main>
            
        </>
    )
}


export default App;