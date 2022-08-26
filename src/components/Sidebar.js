import './Sidebar.scss'

import { FiTrendingUp } from 'react-icons/fi';
import { BsHeart } from "react-icons/bs";
import { AiOutlineCoffee } from "react-icons/ai";

const Sidebar = () => {
    return (
        
        <div className='sidebar'>
            <div className='menu-item' onClick={()=>alert('Click')}>
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