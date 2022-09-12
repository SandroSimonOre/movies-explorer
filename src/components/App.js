import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

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
