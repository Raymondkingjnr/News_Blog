import React, { useEffect, useState } from "react";
import HeadLineItems from "../headlineItems/HeadLineItems";
import axios from "axios";
import { Link } from "react-router-dom";
import "./headlines.css";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa15640c4b6149b4a67fc925aee56b21";

function Headlines() {
  const [headLines, SetHeadLines] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const resp = await axios.get(url);

        SetHeadLines(resp.data.articles);
      } catch (error) {
        console.error("Error fetchin data", Error);
      }
    };

    fetchDate();
  }, []);

  const slicesStory = headLines.slice(0, 6);

  return (
    <section className="head-links">
      <h1>Top Headlines</h1>
      <div className="stories">
        {slicesStory.map((story, index) => {
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
