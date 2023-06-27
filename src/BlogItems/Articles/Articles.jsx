import React from "react";
import { useSelector } from "react-redux";
import blogImage from "../../assets/blog-img.png";
import "./articles.css";
import Buttons from "../buttonsContainer/Buttons";
function Articles() {
  const { isLoading, StoriesItems } = useSelector((state) => state.stories);

  const articles = StoriesItems?.articles;

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <main className="main">
      <h1>Articles</h1>
      <div className="article_line"></div>
      <div className="articles">
        {articles?.map((news, index) => {
          const id = news.source.id;
          const { title, url, urlToImage, description } = news;

          return (
            <main key={`${index} ${id}`} className="article">
              <img src={urlToImage ? urlToImage : blogImage} alt={title} />
              <div className="article-note">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer">
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
