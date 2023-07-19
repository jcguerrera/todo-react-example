import { useContext } from 'react';
import '../styles/Search.css'
import { TodoContext } from './TodoContext';

function Search(){

    const { searchValue, setSearchValue } = useContext(TodoContext);
    return(
        <input 
            type="text" 
            placeholder="Search" 
            className="input-search"
            value={searchValue} 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    )
}

export default Search;