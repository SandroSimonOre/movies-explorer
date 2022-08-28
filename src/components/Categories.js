import './Categories.scss';
import Tag from './Tag';
import useGetCategories from '../hooks/useGetCategories';

function Categories(){
    const categories = useGetCategories();

    return (
        <div className='categories'>
            <div className='arrow left-arrow'>
                &#8249;
            </div>
            <div className='tags-container'>

                {   
                    categories && (   
                        
                        categories.map(category => {
                            return <Tag category={category} key={category.id} />
                        })
                    )
                }
            </div>
            <div className='arrow right-arrow'>
                &#8250;
            </div>
        </div>
    )
}

export default Categories;