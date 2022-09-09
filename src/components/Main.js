import CategoriesSlider from './CategoriesSlider.js';
import CardsContainer from './CardsContainer.js';
import './Main.scss';
const Main = () => {
    return (
        <div className='main'>
            <CategoriesSlider />
            <CardsContainer />
        </div>
    )
}

export default Main;