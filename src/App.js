import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.scss'

const Container = () => {
    return (
        <div className='container'>  
        
            <Header />
            <Sidebar />
            <Main />
    
        </div> 
    )
}

export default Container;
