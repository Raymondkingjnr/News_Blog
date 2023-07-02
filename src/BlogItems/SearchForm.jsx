import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  setQuery,
  getStories,
  updatePage,
} from "../features/stories/storiesSlice";
import { useSelector, useDispatch } from "react-redux";

function SearchForm() {
  const dispatch = useDispatch();
  const { query } = useSelector((story) => story.stories);

  const handleSearchInput = () => {
    dispatch(updatePage(1));
    dispatch(getStories({ query, page: 1 }));
  };

  const handleQueryChange = (event) => {
    dispatch(setQuery(event.target.value));
    dispatch({ page: 1 });
  };
  return (
    <form className="articles-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        placeholder="search"
        onChange={handleQueryChange}
      />

      <div className="search-icon">
        <AiOutlineSearch className="form-icon" onClick={handleSearchInput} />
      </div>
    </form>
  );
}

export default SearchForm;
