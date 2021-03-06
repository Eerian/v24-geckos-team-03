import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();

  const {
    setSearchResults,
    searchQuery,
    setSearchQuery,
    setIsSearch,
    APIKEY
  } = useContext(Context);

  const inputEl = useRef(null);

  function searchSubmit(e) {
    e.preventDefault();

    setSearchQuery(inputEl.current.value);

    setIsSearch(true);

    history.push("/searchPage"); // Routes to search page on submit
    console.log(searchQuery);
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchQuery}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setIsSearch(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [APIKEY, searchQuery, setIsSearch, setSearchResults]);

  return (
    <div className="search">
      <form onSubmit={searchSubmit}>
        <input
          type="text"
          name="search"
          ref={inputEl}
          placeholder="Search movies!"
        ></input>
        <button type="submit" name="button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
