
import Categories from './Categories.js';
import CardsContainer from './CardsContainer.js';
import './Main.css';
const Main = () => {
    return (
        <div className='main'>
            <Categories />
            
            <CardsContainer title='My favorite movies' />
        </div>
    )
}

export default Main;