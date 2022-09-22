import { useState } from 'react';
import './Searcher.scss'

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
        
        <form className='searcher' onSubmit={handleSubmit}>
            <input className='search-input' value={input} type="text" placeholder='Search here' onChange={handleChange} autoFocus />
                <button className='search-button'>
                    <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='' />
                </button>
        </form>
        
        
    )
}