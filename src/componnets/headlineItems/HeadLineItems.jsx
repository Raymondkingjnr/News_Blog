import React from "react";
import "./headLineitems.css";
function HeadLineItems({ description, title, url, urlToImage }) {
  return (
    <div className="headline-content">
      <img src={urlToImage} alt={title} />

      <h4>{title}</h4>
      <p>{description.substring(0, 100)}...</p>
      <main className="link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          details
        </a>
      </main>
    </div>
  );
}

export default HeadLineItems;