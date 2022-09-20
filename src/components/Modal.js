import ReactDOM from 'react-dom';
import './Modal.scss'

export const Modal = ({isOpen, closeModal, children}) => {
    
    return ReactDOM.createPortal(
    
        <div className={`modal-background ${isOpen && "is-open"}`} onClick={()=>closeModal()}>   
    
            <div className='modal-container' onClick={e => e.stopPropagation()}>
    
                <button className='close-button' onClick={()=>closeModal()}>
                    CLOSE
                </button>
        
                <div className='modal-content'>
                    
                    {children}
                    
                </div>
                
            </div>
    
        </div>,
    
        document.getElementById('portal') //This element must exist in index.html
    
        )
}