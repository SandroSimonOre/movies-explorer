import './Category.scss'
function Category(props){
    const {name, id} = props.category;
    return(
        <div className='category' id={id}>
            <p>{name}</p> 
        </div>
    )
}
export default Category;