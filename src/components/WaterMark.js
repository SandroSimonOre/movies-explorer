import styles from '../styles/WaterMark.module.scss';

export const WaterMark = ({text}) => {
    
    return (
        <div className={styles.waterMarkContainer}>
            <div className={styles.wrapper}>
            <div className={styles.waterMark}>
                
                <p>{text}</p>

            </div>
            </div>

        </div>
    )
}