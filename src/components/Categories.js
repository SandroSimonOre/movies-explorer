import './Categories.css';
import Tag from './Tag';
import useGetCategories from '../hooks/useGetCategories';

function Categories(){
    const categories = useGetCategories();

    return (
        <div className='categories'>

            {   
                categories && (   
                        
                    categories.map(category => {
                        return <Tag category={category} key={category.id} />
                    })
                )
            }
        </div>
    )
}

export default Categories;