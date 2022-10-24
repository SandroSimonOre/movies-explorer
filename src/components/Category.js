import styles from './Category.module.scss';

export const Category = ({category, updateCategories}) => {
    
    const handleClick = ()=> {
        updateCategories(category);
    }
    return (
        <div className={`${styles.category} ${category.selected ? styles.selected : ''}`} onClick={ handleClick }>
            <span>
                {category.name}
            </span>
        </div>
    )
}