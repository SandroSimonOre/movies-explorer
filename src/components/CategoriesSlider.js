import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';
import { useEffect, useRef } from 'react';

function CategoriesSlider(){

    const categories = useGetCategories();
    const firstVisible = useRef(null);
    const firstHidden = useRef(null);
    const ignoreObserver = useRef(false);
    const userClickingArrow = useRef(false);
    const firstTime = useRef(true);

    // This is for testing
    //const llamadas = useRef(0);
    useEffect(()=> {
        // INTERSECTION OBSERVER
        //console.log('UseEffect...')
        let options = {
            root: document.getElementById('categories-container'),
            threshold: 1.0
        }

        const callback = entries => {
            //llamadas.current++;
            //console.log(`INICIANDO LLAMADA NRO.${llamadas.current}`)
            //console.log('ignoreObserver:',ignoreObserver.current);    
            if (firstTime.current) {
                //console.log('ejecutando por ser la primera vez...')
                entries.forEach(e => {
                    
                    if (firstVisible.current === null && e.isIntersecting) {
                        firstVisible.current = e.target;
                        //console.log('firstVisible:', firstVisible.current.textContent);
                    }

                    if (firstHidden.current === null && !e.isIntersecting) {
                        firstHidden.current = e.target;
                        //console.log('firstHidden:', firstHidden.current.textContent);
                    }
                    
                });
                
            }
            if (firstTime.current === false && ignoreObserver.current === false)  {
                //console.log(firstTime.current, ignoreObserver.current)
                //console.log('No se ejecuta la primera vez')
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        firstVisible.current = e.target;
                        //console.log('firstVisible:',firstVisible.current.textContent);
                    }

                    if (!e.isIntersecting) {
                        firstHidden.current = e.target;
                        //console.log('firstHidden:',firstHidden.current.textContent);
                    }
                })
            }    
            
            entries.forEach( e => {
                
                if (e.isIntersecting && e.target === document.getElementById('categories').lastChild) {
                    document.getElementById('right-arrow').classList.add('disabled');
                } else if (!e.isIntersecting && e.target === document.getElementById('categories').lastChild) {
                    document.getElementById('right-arrow').classList.remove('disabled');
                };

                if (e.isIntersecting && e.target === document.getElementById('categories').firstChild) {
                    document.getElementById('left-arrow').classList.add('disabled');
                } else if (!e.isIntersecting && e.target === document.getElementById('categories').firstChild) {
                    document.getElementById('left-arrow').classList.remove('disabled');
                };
            })

            if (userClickingArrow.current) {
                entries.forEach(e => {
                    if (e.isIntersecting) firstVisible.current = e.target;
                    if (!e.isIntersecting) firstHidden.current = e.target;
                })
                userClickingArrow.current = false;
            }
            firstTime.current = false;
            ignoreObserver.current = false;    
            //console.log(`FINALIZANDO LLAMADA NRO.${llamadas.current}`)
        }

        let observer = new IntersectionObserver(callback, options);

        Array.prototype.forEach.call(document.getElementsByClassName('category'), e => observer.observe(e));
        
        // FIN INTERSECTION OBSERVER
            
    }, [])
    
    const clickArrowsHandler = (e) => {
        ignoreObserver.current = true;
        userClickingArrow.current = true;
        if (e.target.id === 'left-arrow') {
            //console.log('CLICK LEFT ARROW')
            //console.log('ignoreObserver:',ignoreObserver.current);  
            
            if (document.getElementById('categories').classList.contains('right-aligned')) {
                
                firstVisible.current = firstHidden.current;
                let nextToHide = firstVisible.current.previousSibling;
                
                while(nextToHide) {
                
                    nextToHide.classList.add('hidden');
                    nextToHide = nextToHide.previousSibling;
                    
                }     
            } else if (!document.getElementById('categories').classList.contains('right-aligned')) {
                firstVisible.current = firstVisible.current.previousSibling;
                firstVisible.current.classList.remove('hidden');
            }
            
            document.getElementById('categories').classList.remove('right-aligned');
            document.getElementById('categories-container').classList.remove('right-aligned');

        } else if (e.target.id === 'right-arrow') {
            //console.log('CLICK RIGHT ARROW')
            //console.log('ignoreObserver:',ignoreObserver.current);
            if (!document.getElementById('categories').classList.contains('right-aligned')) {
                
                firstVisible.current = firstHidden.current;
                let nextToHide = firstVisible.current.nextSibling;
                
                while(nextToHide) {
                
                    nextToHide.classList.add('hidden');
                    nextToHide = nextToHide.nextSibling;
                    
                }     
            } else if (document.getElementById('categories').classList.contains('right-aligned')) {
                firstVisible.current = firstVisible.current.nextSibling;
                firstVisible.current.classList.remove('hidden');
            }
            
            document.getElementById('categories').classList.add('right-aligned');
            document.getElementById('categories-container').classList.add('right-aligned');
            
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