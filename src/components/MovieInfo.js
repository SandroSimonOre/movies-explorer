import './MovieInfo.scss';

export const MovieInfo = ({movie, basePath, buttonTitle}) => {

    const {
        title,
        poster_path,
        overview,
        release_date,
        vote_average,
        genres
    } = movie;

    

    return <div className='movie-info'>
                <div className = 'movie-info-container'>

                    <div className='poster-container'>
                        <img src={basePath + poster_path} alt='' />
                        
                    </div>
                    <div className='detail-container'>
                        <div>
                            <h4>{title && title}</h4>
                            <p className='overview'>{overview && overview}</p>
                            <p><span>Release date:</span>  {release_date && release_date}</p>
                            <p><span>Genres:</span> {genres && genres.map(e => e.name).join(', ') }</p>
                            <p><span>Rating:</span> {vote_average && vote_average}</p>
                        </div>
                        <button>{buttonTitle}</button>
                    </div>
                    
                </div>
            
            </div>
}