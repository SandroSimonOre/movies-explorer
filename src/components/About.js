import styles from  '../styles/About.module.scss';

export const About = () => {

    return (
        <div className={styles.about}>
                    <h2>About this project</h2>
                    <h3>Source code:</h3>
                    <p>Click the following link to see this project on GitHub:</p>
                    <a href="https://github.com/SandroSimonOre/movies-explorer" target="_blank" rel="noopener noreferrer">
                        github.com/SandroSimonOre/movies-explorer
                    </a>
                    <h3>Website:</h3>
                    <a href="https://sandrosimon.com" target="_blank" rel="noopener noreferrer">sandrosimon.com</a>
                    <h3>Email:</h3>
                    <a href="mailto:hello@sandrosimon.com">hello@sandrosimon.com</a>
        </div>
    )
}