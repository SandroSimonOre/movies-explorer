import styles from './Spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles.spinner}>
        <img className={styles.spinning} src='https://cdn-icons-png.flaticon.com/512/3305/3305803.png' alt='' />
    </div>
  );
}