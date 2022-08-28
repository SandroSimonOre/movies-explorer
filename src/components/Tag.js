import './Tag.scss'
function Tag(props){
    const {name} = props.category;
    return(
        <div className='tag'>
            <p>{name}</p> 
        </div>
    )
}
export default Tag;