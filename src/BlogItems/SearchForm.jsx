import React, { useState } from "react";
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

  const [inputValue, setInputValue] = useState(query);

  const handleSearchInput = () => {
    dispatch(updatePage(1));
    dispatch(getStories({ query, inputValue, page: 1 }));
  };

  const handleQueryChange = (event) => {
    setInputValue(event.target.value);
    dispatch(setQuery(event.target.value));
  };
  return (
    <form className="articles-form">
      <input
        type="text"
        value={inputValue || ""}
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
