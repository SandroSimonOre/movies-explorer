import { Category } from '../components/Category';
import styles from './Categories.module.scss';

export const Categories = ({categories, setMode, updateCategories}) => {
    
    return (
        <div className={styles.categories}>
            
            <section className={styles.categories__categoriesContainer}>
                
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
            <button className={styles.categories__showButton} onClick={()=> setMode('movies') }>Show movies</button>    
        </div>
        
    )
}