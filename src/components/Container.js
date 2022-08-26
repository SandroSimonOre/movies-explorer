import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

import './Container.css'

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
