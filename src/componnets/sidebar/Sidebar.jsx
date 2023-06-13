import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Sidebar } from "../../componnets";
import { Links } from "../../constant";
import { Link } from "react-router-dom";
import { closeSideBar } from "../../features/sidebar/sidebarSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((openSidebar) => openSidebar.sidebar);

  return (
    <section className={`${isOpen}? "sidebar show-sidebar" : "sidebar"`}>
      <ul>
        {Links.map((link, index) => {
          const { text, to } = link;

          return (
            <li className="sidebar-link" key={index}>
              <Link to={to}>{text}</Link>
            </li>
          );
        })}
        <div
          className="icon-close"
          onClick={() => {
            dispatch(closeSideBar());
          }}
        >
          king
        </div>
      </ul>
    </section>
  );
}

export default Sidebar;
