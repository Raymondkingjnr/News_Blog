import React from "react";
import "./headLineitems.css";
import BlogImage from "../../assets/blog-img.png";
import moment from "moment";
function HeadLineItems({ excerpt, title, url, media, publishedAt }) {
  const date = moment(publishedAt).format("MM Do YYYY");
  return (
    <div className="headline-content">
      <img src={media ? media : BlogImage} alt={title} />
      <p style={{ paddingTop: "2rem" }}>Published On : {date}</p>
      <h4>{title}</h4>
      <p>{excerpt?.substring(0, 100)}...</p>
      <main className="link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          details
        </a>
      </main>
    </div>
  );
}

export default HeadLineItems;
