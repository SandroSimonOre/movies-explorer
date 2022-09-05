import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';
import { useEffect, useState, useRef } from 'react';

function CategoriesSlider(){
    const categories = useGetCategories();
    const firstVisible = useRef(0);
    const [elements, setElements] = useState([]);
    
    useEffect(()=> {
        
        setElements(document.getElementById('categories').getElementsByClassName('category'))    
        
        // INTERSECTION OBSERVER
        let options = {
            root: document.getElementById('categories-container'),
            threshold: 1.0
        }

        const callback = (entries) => {
            entries.forEach(entry => {
                
                if (entry.target.classList.contains('first')) {
                    
                    if (entry.isIntersecting ) {
                        document.getElementById('left-arrow').classList.add('hidden')
                        console.log('...')
                    } else {
                        document.getElementById('left-arrow').classList.remove('hidden')
                    }
                } else if (entry.target.classList.contains('last')) {
                    if (entry.isIntersecting ) {
                        document.getElementById('right-arrow').classList.add('hidden')
                    } else {
                        document.getElementById('right-arrow').classList.remove('hidden')
                    }
                }

            }); 
        }

        let observer = new IntersectionObserver(callback, options);

        observer.observe(document.getElementsByClassName('first')[0]);
        observer.observe(document.getElementsByClassName('last')[0]);
        // FIN INTERSECTION OBSERVER
            
    }, [])
    
    const clickArrowsHandler = (e) => {

        if (e.target.id === 'left-arrow') {

            firstVisible.current--;
            elements[firstVisible.current].classList.remove('hidden');
        
        } else if (e.target.id === 'right-arrow') {
        
            elements[firstVisible.current].classList.add('hidden');
            firstVisible.current++;
        }
                
    }
    
    return (

        <div className='categories-slider'>
            <div className='arrow-container'>
                <div className='arrow left-arrow' id='left-arrow' onClick={clickArrowsHandler}>
                    &#8249;
                </div>
            </div>
            
            <div className='categories-container' id='categories-container'>
                <div className='categories' id='categories'>

                    {   
                        categories && (   
                            
                            categories.map((category, index, array) => {
                                return <Category 
                                    key={category.id} 
                                    category={category}
                                    isFirst={(index === 0) && true}
                                    isLast={(index === array.length - 1) && true}    
                                />
                            })
                        )
                    }
                </div>
            </div>
            <div className='arrow-container'>
                <div className='arrow right-arrow' id='right-arrow' onClick={clickArrowsHandler}>
                    &#8250;
                </div>
            </div>
        </div>
    )
}

export default CategoriesSlider;