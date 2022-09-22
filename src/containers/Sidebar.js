import { Link } from "react-router-dom";
import {MenuItem} from '../components/MenuItem'
import './Sidebar.scss'
export const Sidebar = () => {

    return (
        
        <div id='sidebar' className='sidebar'>
            <div className='menu-container'>
                
                <Link className='link' to = '/favorites'>
                    <MenuItem title = 'Favorites' url = 'https://cdn-icons-png.flaticon.com/512/3507/3507694.png' />
                </Link>

                <Link className='link' to = '/trending'>
                    <MenuItem title = 'Trending' url = 'https://cdn-icons-png.flaticon.com/512/3121/3121768.png' />
                </Link>
                
                <Link className='link' to = '/discovering'>
                    <MenuItem title = 'Discovering' url = 'https://cdn-icons-png.flaticon.com/512/3649/3649527.png' />
                </Link>
            
                <Link className='link' to = '/search'>
                    <MenuItem title = 'Search' url = 'https://cdn-icons-png.flaticon.com/512/1055/1055645.png' />
                </Link>

            </div>

        </div>
    )
}
