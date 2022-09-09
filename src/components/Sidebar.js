import './Sidebar.scss'

import { FiTrendingUp } from 'react-icons/fi';
import { BsHeart } from "react-icons/bs";
import { AiOutlineCoffee } from "react-icons/ai";

const Sidebar = () => {

    // Esto solo es una prueba, ELIMINAR luego.
    const showInfo = () => {
        const elemento = document.getElementById('test')
        console.log(getComputedStyle(elemento))
    }

    return (
        
        <div id='sidebar' className='sidebar'>
            <div className='menu-item' onClick={showInfo}>
                <FiTrendingUp />
                <p>Trending</p>
            </div>

            <div className='menu-item'>
                <BsHeart />
                <p>Favorites</p>
            </div>

            <div className='menu-item'>
                <AiOutlineCoffee />
                <p>Added</p>
            </div>
            
        </div>
    )
}

export default Sidebar;