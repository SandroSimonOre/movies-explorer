
import './Categories.css';
import Tag from './Tag'

function Categories(){
    return (
        <div className='categories'>
            <Tag title='La vida es bella' />
            <Tag title= 'Interstellar' />
            <Tag title = 'The Godfather' />
            <Tag title = 'Titanic' />
            <Tag title = 'Road to pertition' />
            <Tag title = 'The Jocker' />
        </div>
    )
}

export default Categories;