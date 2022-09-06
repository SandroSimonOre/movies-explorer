import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';
import { useEffect, useRef } from 'react';

function CategoriesSlider(){
    const categories = useGetCategories();
    const firstVisible = useRef(null);
    const lastVisible = useRef(null);
    //const [elements, setElements] = useState([]);

    
    useEffect(()=> {
        
        //setElements(document.getElementById('categories').getElementsByClassName('category'))    
        
        // INTERSECTION OBSERVER
        let options = {
            root: document.getElementById('categories-container'),
            threshold: 1.0
        }

        const callback = entries => {
            // Ojo con esto: estamos asumiendo que los elementos se guardan en orden
            const tempArray = entries.filter(e => e.isIntersecting);
            //console.log('tempArray',tempArray)
            firstVisible.current = tempArray.at(0).target;
            lastVisible.current = tempArray.at(-1).target;
            //console.log(firstVisible.current);
            //console.log(lastVisible.current);           

            
            entries.forEach(entry => {
                //console.log(entry)
                // if (entry.target.classList.contains('first')) {
                if (entry.target.classList.contains('first')) {
                    
                    if (entry.isIntersecting ) {
                        document.getElementById('left-arrow').classList.add('disabled')
                    } else {
                        document.getElementById('left-arrow').classList.remove('disabled')
                    }
                } else if (entry.target.classList.contains('last')) {
                    if (entry.isIntersecting ) {
                        document.getElementById('right-arrow').classList.add('disabled')
                    } else {
                        document.getElementById('right-arrow').classList.remove('disabled')
                    }
                }
                /*if (!entry.isIntersecting) {
                    entry.target.classList.add('hidden')
                }*/

            });
            console.log('terminando ejecución...')        
        }

        let observer = new IntersectionObserver(callback, options);

        Array.prototype.forEach.call(document.getElementsByClassName('category'), e => observer.observe(e));
        

        // FIN INTERSECTION OBSERVER
            
    }, [])
    
    const clickArrowsHandler = (e) => {
        
        if (e.target.id === 'left-arrow') {

            document.getElementById('categories').classList.add('left-aligned');
            document.getElementById('categories-container').classList.add('left-aligned');
            document.getElementById('categories').classList.remove('right-aligned');
            document.getElementById('categories-container').classList.remove('right-aligned');

            /*
            if  (firstVisible.current <= 0 )  return;
            firstVisible.current--;
            elements[firstVisible.current].classList.remove('hidden');
            */
            //console.log(firstVisible.current.previousSibling.id)
            if (firstVisible.current.previousSibling) {
                firstVisible.current.previousSibling.classList.remove('hidden');
            } 

        } else if (e.target.id === 'right-arrow') {
            
            document.getElementById('categories').classList.add('right-aligned');
            document.getElementById('categories-container').classList.add('right-aligned');
            document.getElementById('categories').classList.remove('left-aligned');
            document.getElementById('categories-container').classList.remove('left-aligned');
            /*
            if (firstVisible.current >= elements.length-1) return;
            elements[firstVisible.current].classList.add('hidden');
            firstVisible.current++;
            */
            //console.log(lastVisible.current.nextSibling.id)
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
            <div className='arrow-container right-arrow-container'>
                <button id='right-arrow' onClick={clickArrowsHandler}>
                    &#8250;
                </button>
            </div>
        </div>
    )
}

export default CategoriesSlider;