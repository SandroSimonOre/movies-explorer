import './Header.scss';
import Searcher from './Searcher';
import MenuButton from './MenuButton';

const Header = () => {

    return (
        
        <div className='header'>
            <MenuButton />
            <div className='logo-container'>
                <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg' alt="" />
            </div>
            <Searcher />
        </div>
        
    )
}

export default Header;