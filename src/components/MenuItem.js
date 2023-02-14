import styles from '../styles/MenuItem.module.scss';

export const MenuItem = ({url, title}) => {

    return (
        <div className={styles.menuItem}>
            <div className={styles.itemIcon}>
                <img src={url} alt="" />
            </div>
            <div className={styles.itemTitle}>
                {title}
            </div>
            
        </div>

   ) 
}