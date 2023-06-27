import React from "react";
import SearchForm from "../SearchForm";
import "./blogheader.css";
function BlogHeader() {
  return (
    <div className="articles-header">
      <h2>Discover new articles here</h2>
      <p>
        Get all the latest news happening around the world with just a click
      </p>
      <SearchForm />
    </div>
  );
}

export default BlogHeader;
