import './MenuButton.scss'
const MenuButton = () => {
    
    const handleClickMenuButton = () => {
        document.getElementById('sidebar').classList.toggle('express-sidebar');
    }

    return (
        
        <div className='menu-button' onClick={handleClickMenuButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
    )
}
export default MenuButton;