import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';

function CategoriesSlider(){
    const categories = useGetCategories();

    const move = () => {
        
        const categoriesContainer = document.getElementById('categories-container');
        const categories = document.getElementById('categories');
        const widthCategoriesContainer = parseFloat(window.getComputedStyle(categoriesContainer).getPropertyValue("width"));
        const widthCategories = parseFloat(window.getComputedStyle(categories).getPropertyValue("width"));
        /* let bgColor = cssObj.getPropertyValue("visibility"); */

        /* alert(widthCategoriesContainer / widthCategories  * 100); */
        categories.style.transform = 'translate(-57%)'
        
        
    }

    return (

        <div className='categories-slider'>
            <div className='arrow left-arrow'>
                &#8249;
            </div>
            <div className='categories-container' id='categories-container'>
                <div className='categories' id='categories'>

                    {   
                        categories && (   
                            
                            categories.map(category => {
                                return <Category key={category.id} category={category} />
                            })
                        )
                    }
                </div>
            </div>
            <div className='arrow right-arrow' onClick={move}>
                &#8250;
            </div>
        </div>
    )
}

export default CategoriesSlider;