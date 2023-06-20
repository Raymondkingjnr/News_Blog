import React from "react";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const { topNews } = useSelector((story) => story.stories);
  const slicesStory = topNews.articles;
  const heroSlice = slicesStory?.slice(6, 9);

  return (
    <Slider {...settings} className="hero-sec">
      {heroSlice?.map((item, index) => {
        const { title, urlToImage, url } = item;
        return (
          <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="hero-item">
              <img src={urlToImage} alt={urlToImage} />
              <h5>{title}</h5>
            </div>
          </a>
        );
      })}
    </Slider>
  );
}

export default Hero;
