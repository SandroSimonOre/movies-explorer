import styles from '../styles/MoviesGrid.module.scss';
export const MoviesGrid = ({children}) => {

    return (
        <div id='movies-grid' className={styles.moviesGrid}>            

                {children}

        </div>
    )

}