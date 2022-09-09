import './MenuButton.scss'
const MenuButton = () => {
    
    const handleClickMenuButton = () => {
        document.getElementById('sidebar').classList.toggle('express-sidebar');
        document.getElementById('main').classList.toggle('extended-main');
        document.getElementById('cards-container').classList.toggle('extended-cards-container');
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