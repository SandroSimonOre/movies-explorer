import './MenuButton.scss'
export const MenuButton = () => {
    
    const handleClickMenuButton = () => {
        document.getElementById('app').classList.toggle('alt-layout');
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