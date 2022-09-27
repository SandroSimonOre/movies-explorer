import './Header.scss';
import {MenuButton} from '../components/MenuButton';

export const Header = () => {

    return (
        
        <div className='header'>
            <div className='header__menu-button-container'>
                <MenuButton />
            </div>
            
            <div className='header__logo-container'>
                <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg' alt="" />
            </div>
        </div>
        
    )
}