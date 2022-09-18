import { useState } from 'react';
import './Searcher.scss'
import { Link } from 'react-router-dom'

const Searcher = () => {

    const [searchText, setSearchText] = useState('');
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className='searcher-container'>
            <form className='searcher'>
                <input className='search-input' value={searchText} type="text" placeholder='Search here' onChange={handleChange} />
                <Link to = {`/search?q=${searchText}`}>
                    <button className='search-button'>
                        <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='' />
                    </button>
                </Link>
                
            </form>
            
        </div>
    )
}

export default Searcher;