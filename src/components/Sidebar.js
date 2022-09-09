import './Sidebar.scss'
import MenuItem from './MenuItem'
const Sidebar = () => {

    return (
        
        <div id='sidebar' className='sidebar'>
            <div className='menu-container'>    
                <MenuItem title = 'Trending' url = 'https://cdn-icons-png.flaticon.com/512/3121/3121768.png' />
                <MenuItem title = 'Favorites' url = 'https://cdn-icons-png.flaticon.com/512/3507/3507694.png' />
                <MenuItem title = 'Recents' url = 'https://cdn-icons-png.flaticon.com/512/3649/3649527.png' />
            </div>
            <div className='more-info'>
                <h5>About this app:</h5>
                <p>You can find more information about this app fucntionality on the next link:</p>
            </div>
        </div>
    )
}

export default Sidebar;