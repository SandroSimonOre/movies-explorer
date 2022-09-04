import './CategoriesSlider.scss';
import Category from './Category';
import useGetCategories from '../hooks/useGetCategories';
import { useEffect, useState } from 'react';

function CategoriesSlider(){
    const categories = useGetCategories();
    // const [offsets, setOffsets] = useState([]);
    // const [totalWidth, setTotalWidth] = useState(0);
    const [currentPoint, setCurrentPoint] = useState(0);
    
    useEffect(()=> {
        
        let sumWidth = 0;
        const tempArray = [...document.getElementById('categories').getElementsByClassName('category')].map((element, index) => {
            
            const currentWidth = Number(window.getComputedStyle(element).getPropertyValue('width').replace('px',''))
            sumWidth +=  currentWidth; 
            
            return {
                id: element.id,
                offset: sumWidth
            }
            
        });

        // setOffsets(tempArray);
        // setTotalWidth(sumWidth);

        
        // INTERSECTION OBSERVER
        let options = {
            root: document.getElementById('categories-container'),
            threshold: 1.0
        }

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    //console.log(entry.target.id)
                    //entry.target.
                    document.getElementById('left-arrow').classList.add('hidden')

                } else {
                    document.getElementById('left-arrow').classList.remove('hidden') 
                }
            }); 
        }

        let observer = new IntersectionObserver(callback, options);

        observer.observe(document.getElementById('37'));
        observer.observe(document.getElementById('28'));

        // FIN INTERSECTION OBSERVER
            
    }, [])
    
    

    const clickArrowsHandler = (e) => {

        let box = document.getElementById('categories');
        const categoriesWidth = window.getComputedStyle(box).getPropertyValue('width').replace('px','');
        box = document.getElementById('categories-container');
        const categoriesContainerWidth = window.getComputedStyle(box).getPropertyValue('width').replace('px','');
        
        
        //console.log(categoriesWidth)
        //console.log(categoriesContainerWidth)
        const percentage = Number((categoriesContainerWidth / categoriesWidth * 100).toFixed(2));
        //console.log(percentage)

        let points = [0];

        while (points.at(-1) < 100) {
            //console.log(points.at(-1))
            points.push(points.at(-1) + percentage > 100 ? 100 :  points.at(-1) + percentage)
        }

        console.log(points)
        
        if (e.target.id === 'left-arrow') {
            
        } else if (e.target.id === 'right-arrow') {
            setCurrentPoint(previous => previous + 1)
            document.getElementById('categories').style.transform = `translate(-${points[currentPoint]}%)`;
        }

        //const percentage = offsets[currentOffset].offset / totalWidth * 100
        //console.log(percentage)
        
        
    }
    
    return (

        <div className='categories-slider'>
            <div className='arrow left-arrow' id='left-arrow' onClick={clickArrowsHandler}>
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
            <div className='arrow right-arrow' id='right-arrow' onClick={clickArrowsHandler}>
                &#8250;
            </div>
        </div>
    )
}

export default CategoriesSlider;
