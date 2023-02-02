import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/Input";
import { Link } from "react-router-dom";
import './styles.css';
import { connectFirestoreEmulator } from "firebase/firestore";


const Search = () => {
  const history = useHistory();
  const searchterm = useInput("");
  const [dropdown, setDropdown] = useState(false)

  const handleSearch = (e) => {
    console.log(searchterm.value)
    if (e.keyCode === 13) {
      if (!searchterm.value.trim()) {
        return "Please enter the searchterm";
      }
      
      history.push(`/${searchterm.value}`);
      searchterm.setValue("");
      setDropdown(false)
    }
  };

 const showDropdown =  ()=>{
  setDropdown(true)
  }
  
 const hideDropdown = ()=> {
    setDropdown(false)
  }

  const searchRecent = (result)=> {
    history.push(`/${result}`);
    searchterm.setValue("");
    hideDropdown();
  }

  let  searchData =window.localStorage.getItem('recents')
  let  deduped = searchData === null ? [] : JSON.parse(searchData)
  var recents = Array.from(new Set(deduped));
  const play =( ) => {
    console.log('oiadas')
    handleSearch()
  }

  return (
   
    <>
      <input
        className="search"
        type="text"
        placeholder=""
        value={searchterm.value}
        onKeyDown={handleSearch}
        onChange={searchterm.onChange}
        onFocus={ showDropdown}
      />
        <button onClick={()=>play()} className="searhch-button">Search</button>
      {dropdown &&
        <div className="search-dropdown">
          <ul className="search-results-list">
            {recents.map(result => (
              <Link key={result.id} onClick={ () => searchRecent(result)}>
                  <li key={result}  className="search-result">{result}</li>
              </Link>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default Search;
