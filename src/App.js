import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Modal from './components/Modal';
import './App.scss'

const App = () => {
    return (
        <div className='App'>  

            <Routes>

                <Route path='/' element = {<Navigate to = '/discovering' />} />
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
            <Main />
            {/* <Modal /> */}
        </>
    )
}

const TrendingMovies = () => {
    return (
        <>
            <h1>Trending movies</h1>
        </>
    )
}

const FavoriteMovies = () => {
    return (
        <>
            <h1>Favorite movies</h1>    
        </>
    )
}

export default App;