import './Tag.css'
function Tag(props){
    return(
        <div className='tag'>
            <p>{props.title}</p> 
        </div>
    )
}
export default Tag;