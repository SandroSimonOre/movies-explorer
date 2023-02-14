import { Category } from '../components/Category';
import styles from '../styles/Categories.module.scss';

export const Categories = ({categories, setMode, updateCategories}) => {
    
    return (
        <div className={styles.categories}>
            
            <section className={styles.categoriesContainer}>
                
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
            <button className={styles.showButton} onClick={()=> setMode('movies') }>Show movies</button>    
        </div>
        
    )
}