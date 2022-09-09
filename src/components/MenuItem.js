import './MenuItem.scss'
const MenuItem = (props) => {
   return (
        <div className='menu-item'>
            <div className='item-icon'>
                <img src={props.url} alt="" />
            </div>
            <div className='item-title'>
                {props.title}
            </div>
            
        </div>

   ) 
}
export default MenuItem;