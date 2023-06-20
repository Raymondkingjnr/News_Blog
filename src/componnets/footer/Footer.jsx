import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { footerlink } from "../../constant";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
function Footer() {
  return (
    <footer className="footer">
      <main className="footer-newsletter">
        <h2>Subscribe for new content</h2>
        <form className="footer_form">
          <h3>Email</h3>
          <input type="text" placeholder="enter-mail" />
          <button type="button">Subscribe</button>
        </form>
      </main>
      <article>
        <main className="logo-footer">
          <Link to="/">
            <h2>
              Daily <span className="span-logo">Info</span>.
            </h2>
          </Link>
          <div className="blog">
            <Link to="/blog" className="blog_inner-text">
              Blog
            </Link>
            <Link to="/" className="blog_inner-text">
              Deals
            </Link>
          </div>
          <p>
            Copyright @ 2011-2023 Natural <br /> Intelligence Ltd. All Rights
            Reserved
          </p>
          <div className="socials">
            <ul className="icons">
              <FiFacebook />
            </ul>
            <ul className="icons">
              <FiInstagram />
            </ul>
            <ul className="icons">
              <FiTwitter />
            </ul>
          </div>
        </main>
        <aside className="side-footer">
          <ul className="footer-links">
            <li>
              <Link to="/about" className="about">
                About us
              </Link>
            </li>
            {footerlink.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            excepturi, labore molestias sed culpa cumque. Voluptatibus minima,
            voluptate deserunt ab esse voluptatum libero, velit labore ipsa
            totam doloribus maiores saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil nesciunt delectus nisi, quae
            dignissimos voluptate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus eum esse reiciendis eaque
            voluptatum mag Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptas numquam architecto eveniet natus culpa magnam!
          </p>
        </aside>
      </article>
    </footer>
  );
}

export default Footer;
