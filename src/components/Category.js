import { useState } from 'react';
import './Category.scss';

export const Category = ({category, updateCategories}) => {
    
    //const [ category ] = useState(category);
    
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