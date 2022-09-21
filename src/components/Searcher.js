import { useState } from 'react';
import { Link } from 'react-router-dom'
//import { useSearchParams } from 'react-router-dom';
import './Searcher.scss'

export const Searcher = () => {

    //const [query, setQuery] = useSearchParams();
    const [searchText, setSearchText] = useState('');
    //const search = query.get('search');
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(searchText)
        //setQuery({ search: searchText })
        
    }
    */

    const handleChange = (e) => {
        setSearchText(e.target.value);
        //console.log(searchText)
    }

    // TODO: Refactorizar aqui, pues ya no necesitamos complicarons con Link al parecer...
    return (
        <div className='searcher-container'>
            <form className='searcher' /* onSubmit={handleSubmit} */>
                <input className='search-input' value={searchText} type="text" placeholder='Search here' onChange={handleChange} autoFocus />
                <Link to = {`/search?query=${searchText}`}>
                    <button className='search-button'>
                        <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='' />
                    </button>
                </Link>
                
            </form>
            
        </div>
    )
}