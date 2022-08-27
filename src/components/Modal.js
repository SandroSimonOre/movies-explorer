import ReactDOM from 'react-dom';
import './Modal.scss'

const Modal = (props) => {
    
    const {isOpen, handleClick, test} = props;
    
    return ReactDOM.createPortal(
        <div className={`modal-shadow ${isOpen && "is-open"}`} onClick={()=>handleClick()}>   
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                <button className='close-button' onClick={()=>handleClick()}>
                    CLOSE
                </button>
                <h1>{test}</h1>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
export default Modal;