import { Routes, Route, Navigate } from "react-router-dom";
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Main} from './containers/Main';
import {Discover} from './containers/Discover';
import {Favorites} from './containers/Favorites';
import {Trending} from './containers/Trending';
import {Search} from "./containers/Search";

import './App.scss'

export const App = () => {
    
    return (
        <div id='app' className='app'>  

            <Routes>

                <Route path='/' element = {<Navigate to = '/trending' />} />
                
                <Route path='/favorites' element = { 
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Favorites />
                            </Main>
                        </>
                    }
                 />
                
                <Route path='/trending' element = { 
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Trending />
                            </Main>
                        </>
                    } 
                />
                
                <Route path='/discover' element = {
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Discover />
                            </Main>
                        </>
                    } 
                />
                
                <Route path='/search' element = { 
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Search />
                            </Main>
                        </>
                    } 
                />
                
            </Routes>

        </div> 
    )
}