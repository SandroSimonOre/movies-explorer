
import Categories from './CategoriesSlider.js';
import CardsContainer from './CardsContainer.js';
import './Main.scss';
const Main = () => {
    return (
        <div className='main'>
            <Categories />
            
            <CardsContainer title='My favorite movies' />
        </div>
    )
}

export default Main;