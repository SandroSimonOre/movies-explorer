import { Link } from "react-router-dom";
import './Sidebar.scss'
import MenuItem from '../components/MenuItem'
const Sidebar = () => {

    return (
        
        <div id='sidebar' className='sidebar'>
            <div className='menu-container'>
                <Link className='link' to = '/trending'>
                    <MenuItem title = 'Trending' url = 'https://cdn-icons-png.flaticon.com/512/3121/3121768.png' />
                </Link>
                
                <Link className='link' to = '/discovering'>
                    <MenuItem title = 'Discovering' url = 'https://cdn-icons-png.flaticon.com/512/3649/3649527.png' />
                </Link>

                <Link className='link' to = '/favorites'>
                    <MenuItem title = 'Favorites' url = 'https://cdn-icons-png.flaticon.com/512/3507/3507694.png' />
                </Link>

                <Link className='link' to = '/recommendations'>
                    <MenuItem title = 'Recommendations' url = 'https://cdn-icons-png.flaticon.com/512/2128/2128445.png' />
                </Link>

            </div>
            {/* <div className='more-info'>
                <h5>About this app:</h5>
                <p>You can find more information about this app fucntionality on the next link:</p>
            </div> */}
        </div>
    )
}

export default Sidebar;