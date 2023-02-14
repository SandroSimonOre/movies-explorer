import styles from '../styles/Main.module.scss';
export const Main = ({children}) => {

    return (
        <div id = 'main' className={styles.main}>
            
            {children}

        </div>
    )
}