import './MoviesGrid.scss';
export const MoviesGrid = ({children}) => {

    return (
        <div id='movies-grid' className='movies-grid'>            

                {children}

        </div>
    )

}