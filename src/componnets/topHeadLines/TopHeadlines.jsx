import React from "react";
import HeadLineItems from "../headlineItems/HeadLineItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./headlines.css";

function Headlines() {
  const { isLoading, topNews } = useSelector((story) => story.stories);

  const slicesStory = topNews.articles;
  const newSlice = slicesStory?.slice(0, 6);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="head-links">
      <h1>Top Headlines</h1>
      <div className="stories">
        {newSlice?.map((story, index) => {
          return <HeadLineItems key={index} {...story} />;
        })}
      </div>
      <button type="button" className="headlines-btn">
        <Link to="/blog" className="blog-btn">
          read more
        </Link>
      </button>
    </section>
  );
}

export default Headlines;
