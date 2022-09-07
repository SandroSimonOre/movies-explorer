import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';
import { useEffect, useRef } from 'react';

function CategoriesSlider(){
    const categories = useGetCategories();
    const firstVisible = useRef(null);
    const lastVisible = useRef(null);
    const direction = useRef(0);

    useEffect(()=> {
        // INTERSECTION OBSERVER
        let options = {
            root: document.getElementById('categories-container'),
            threshold: 1.0
        }

        const callback = entries => {

            // Ojo con esto: estamos asumiendo que los elementos se guardan en orden
            entries.forEach(entry => {

                if (entry.isIntersecting){

                    if (entry.target === document.getElementById('categories').firstChild) {
                        document.getElementById('left-arrow').classList.add('disabled');
                    } else if (entry.target === document.getElementById('categories').lastChild) {
                        document.getElementById('right-arrow').classList.add('disabled');
                    }

                    if (direction.current === 0 && firstVisible.current === null) {
                        firstVisible.current = entry.target;
                    }

                    if (direction.current === 1 ) lastVisible.current = entry.target; 
                    if (direction.current === -1 ) firstVisible.current = entry.target; 

                } else if (!entry.isIntersecting) {
                    
                    if (entry.target === document.getElementById('categories').firstChild) {
                        document.getElementById('left-arrow').classList.remove('disabled');
                    } else if (entry.target === document.getElementById('categories').lastChild) {
                        document.getElementById('right-arrow').classList.remove('disabled');
                    }

                    if (direction.current === 0 && lastVisible.current === null) {
                        lastVisible.current = entry.target.previousSibling;
                    }

                    if (direction.current === 1 ) firstVisible.current = entry.target.nextSibling; 
                    if (direction.current === -1 ) lastVisible.current = entry.target.previousSibling; 

                }
            
            });

        }

        let observer = new IntersectionObserver(callback, options);

        Array.prototype.forEach.call(document.getElementsByClassName('category'), e => observer.observe(e));
        
        // FIN INTERSECTION OBSERVER
            
    }, [])
    
    const clickArrowsHandler = (e) => {
        
        if (e.target.id === 'left-arrow') {
            direction.current = -1;
            let nextToHide = firstVisible.current.previousSibling;
            while(nextToHide) {
                nextToHide.classList.add('hidden')
                nextToHide = nextToHide.previousSibling;
            }

            let nextToShow = firstVisible.current.nextSibling;
            while(nextToShow) {
                nextToShow.classList.remove('hidden');
                nextToShow = nextToShow.nextSibling;
            }

            document.getElementById('categories').classList.remove('right-aligned');
            document.getElementById('categories-container').classList.remove('right-aligned');

            if (firstVisible.current.previousSibling) {
                firstVisible.current.previousSibling.classList.remove('hidden');
            } 

        } else if (e.target.id === 'right-arrow') {
            direction.current = 1;
            let nextToHide = lastVisible.current.nextSibling;
            
            while(nextToHide) {
                nextToHide.classList.add('hidden')
                nextToHide = nextToHide.nextSibling;
            }
            
            document.getElementById('categories').classList.add('right-aligned');
            document.getElementById('categories-container').classList.add('right-aligned');
            
            if (lastVisible.current.nextSibling) {
                lastVisible.current.nextSibling.classList.remove('hidden');
            }
            
        }
                
    }
    
    return (

        <div className='categories-slider'>
            <div className='arrow-container left-arrow-container' >
                <button id='left-arrow' onClick={clickArrowsHandler}>
                    &#8249;
                </button>
            </div>
            
            <div className='categories-container' id='categories-container'>
                <div className='categories' id='categories'>

                    {   
                        categories && (   
                            
                            categories.map((category) => {
                                return <Category 
                                    key={category.id} 
                                    category={category}    
                                />
                            })
                        )
                    }
                </div>
            </div>
            <div className='arrow-container right-arrow-container'>
                <button id='right-arrow' onClick={clickArrowsHandler}>
                    &#8250;
                </button>
            </div>
        </div>
    )
}

export default CategoriesSlider;