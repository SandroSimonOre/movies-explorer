import './Card.css';

function Card(props){
    
    const { poster_path } = props.movie;
    return(
        <div className='card'>

            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />

        </div>
    )
}

export default Card; 