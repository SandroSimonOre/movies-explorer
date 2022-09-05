import './Category.scss'
function Category(props){
    const {name, id} = props.category;
    let position = '';
    if (props.isFirst) position = 'first';
    if (props.isLast) position = 'last';
    return(
        <div className={`category ${position}`} id={id}>
            <p>{name}</p> 
        </div>
    )
}
export default Category;