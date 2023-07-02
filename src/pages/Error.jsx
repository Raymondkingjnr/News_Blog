import React from "react";
import errorImg from "../assets/error.png";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error-page">
      <img src={errorImg} alt="" />

      <Link to="/" className="back-home_btn">
        back home
      </Link>
    </div>
  );
}

export default Error;
