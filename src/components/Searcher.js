import { useState } from 'react';
import styles from './Searcher.module.scss'

export const Searcher = ({setSearchText}) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchText(input);
    } 

    return (
        
        <form className={styles.searcher} onSubmit={handleSubmit}>
            <input className={styles.searchInput} value={input} type="text" placeholder='Search here' onChange={handleChange} autoFocus />
                <button className={styles.searchButton}>
                    <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='' />
                </button>
        </form>
        
        
    )
}