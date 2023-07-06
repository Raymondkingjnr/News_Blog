import React from "react";
import { useSelector } from "react-redux";
import blogImage from "../../assets/blog-img.png";
import "./articles.css";
import Buttons from "../buttonsContainer/Buttons";
import moment from "moment";
function Articles() {
  const { isLoading, StoriesItems } = useSelector((state) => state.stories);

  const articles = StoriesItems?.articles;

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <main className="main">
      <h1>
        Articles
        <div className="article_line"></div>
      </h1>
      <div className="articles">
        {articles?.map((news, index) => {
          const { title, link, media, publishedAt, excerpt, source } = news;

          const date = moment(publishedAt).format("MM Do YYYY");

          return (
            <main key={`${index}`} className="article">
              <img src={media ? media : blogImage} alt="" />

              <h4>{title}</h4>
              {/* <p>{description?.substring(0, 100)}...</p> */}
              <p>{excerpt}</p>

              <a href={link} target="_blank" rel="noopener noreferrer">
                details
              </a>
            </main>
          );
        })}
      </div>
      <Buttons />
    </main>
  );
}

export default Articles;
