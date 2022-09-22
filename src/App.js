import { Routes, Route, Navigate } from "react-router-dom";
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
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

                <Route path='/' element = {<Navigate to = '/favorites' />} />
                
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
                
                <Route path='/discovering' element = {
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Discovering />
                            </Main>
                        </>
                    } 
                />
                
                <Route path='/search' element = { 
                        <> 
                            <Header />
                            <Sidebar />
                            <Main>
                                <Searching />
                            </Main>
                        </>
                    } 
                />
                
            </Routes>

        </div> 
    )
}