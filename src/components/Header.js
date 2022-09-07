import './Header.scss';
import Searcher from './Searcher';
import MenuButton from './MenuButton';

const Header = () => {
    
    const test = () => {
        alert(document.getElementById('categories').lastChild.textContent)       
    }
    return (
        
        <div className='header'>
            <MenuButton />
            <button onClick={test}>TESTEANDO</button>
            <Searcher />
        </div>
        
    )
}

export default Header;