import { Category } from '../components/Category';
import './Categories.scss';

export const Categories = ({categories, setMode, updateCategories}) => {
    
    return (
        <div className='categories'>
            
            <section className='categories__categories-container'>
                
                {
                    categories.length > 0 && categories.map( category => {
                        return <Category 
                            key={category.id}
                            category={category}
                            updateCategories={updateCategories} 
                        />
                    })
                }
            </section>
            <button className='categories__show-button' onClick={()=> setMode('movies') }>Show movies</button>    
        </div>
        
    )
}