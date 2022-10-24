import ReactDOM from 'react-dom';
import styles from './Modal.module.scss'

export const Modal = ({isOpen, closeModal, children}) => {
    
    return ReactDOM.createPortal(
    
        <div className={`${styles.modalBackground} ${isOpen && styles.isOpen}`} onClick={()=>closeModal()}>   
    
            <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
    
                <button className={styles.closeButton} onClick={()=>closeModal()}>
                    CLOSE
                </button>
        
                <div className={styles.modalContent}>
                    
                    {children}
                    
                </div>
                
            </div>
    
        </div>,
    
        document.getElementById('portal') //This element must exist in index.html
    
        )
}