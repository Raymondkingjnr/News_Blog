import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Links } from "../../constant";
import { BiMenuAltRight } from "react-icons/bi";
import "./nav.css";
function Nav() {
  const [openSideBar, setOpensideBar] = useState(false);

  return (
    <nav>
      <aside className="logo">
        <Link to="/">
          <h2>
            Daily <span className="span-logo">Info</span>.
          </h2>
        </Link>
      </aside>
      <ul className="nav-links">
        {Links.map((link, index) => {
          const { text, to } = link;

          return (
            <li key={index} className="nav-link">
              <Link to={to} className="links">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="btn nav-btn">Contact us</button>

      <div className="nav_small-screen">
        <div className="icon" onClick={() => setOpensideBar(true)}>
          <BiMenuAltRight />
        </div>
        {openSideBar && (
          <section className="sidebar slide-in-left ">
            <ul>
              {Links.map((link, index) => {
                const { text, to } = link;

                return (
                  <li className="sidebar-link" key={index}>
                    <Link to={to}>{text}</Link>
                  </li>
                );
              })}
              <div className="icon-close" onClick={() => setOpensideBar(false)}>
                king
              </div>
            </ul>
          </section>
        )}
      </div>
    </nav>
  );
}

export default Nav;
