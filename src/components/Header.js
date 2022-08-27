import './Header.scss';
import Searcher from './Searcher';
import MenuButton from './MenuButton';

const Header = () => {
    return (
        <div className='header'>
            <MenuButton />
            <Searcher />
        </div>
        
    )
}

export default Header;