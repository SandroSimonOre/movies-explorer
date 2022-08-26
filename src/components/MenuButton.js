import './MenuButton.scss'
const MenuButton = () => {
    
    const handleMouseOver = () => {
        alert('mouse hover')
    }

    return (
        
        <div className='menu-button' onClick={()=>alert('hiciste click')} onMouseOver={handleMouseOver}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
    )
}
export default MenuButton;