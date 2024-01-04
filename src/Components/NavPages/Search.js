import React from 'react'
import { useGlobalContext } from '../../context'
import Movies from '../../Movies';
import './css/Search.css';

const Search = () => {
  const {query,setQuery} = useGlobalContext();
  return (
    <>
    <div className='search__movie'>
    <section>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input 
        type="text"
        spellcheck="false"
        placeholder='search your movie'
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
      </form>
    </section>
    </div>
    <Movies/>
    </>
  )
}

export default Search