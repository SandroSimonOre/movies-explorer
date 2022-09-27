import './Category.scss';

export const Category = ({category, updateCategories}) => {
    
    const handleClick = ()=> {
        updateCategories(category);
    }
    return (
        <div className={`category ${category.selected ? 'selected' : ''}`} onClick={ handleClick }>
            <span>
                {category.name}
            </span>
        </div>
    )
}