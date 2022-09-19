import ReactDOM from 'react-dom';
import './Modal.scss'

const Modal = (props) => {
    
    const {isOpen, handleClick, movie} = props;
    
    return ReactDOM.createPortal(
        <div className={`modal-shadow ${isOpen && "is-open"}`} onClick={()=>handleClick()}>   
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                <button className='close-button' onClick={()=>handleClick()}>
                    CLOSE
                </button>
                <div className='movie-container'>
                    <div className='poster-container'>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt='' />
                    </div>
                    <div className='movie-info'>
                        <div>
                            <h1>{movie.title || 'Title unavailable'}</h1>
                            <p>{movie.overview}</p>
                            <div>
                                <span>Rating:{movie.vote_average}</span>
                            </div>
                        </div>
                        <button>Add to favorites</button>
                    </div>
                    
                </div>
                
            </div>
        </div>,
        document.getElementById('portal')
    )
}
export default Modal;