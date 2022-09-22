import './MenuItem.scss';

export const MenuItem = ({url, title}) => {

    return (
        <div className='menu-item'>
            <div className='item-icon'>
                <img src={url} alt="" />
            </div>
            <div className='item-title'>
                {title}
            </div>
            
        </div>

   ) 
}