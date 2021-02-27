import React from "react";
import { Link } from "react-router-dom";
import * as classes from "./Sidebar.module.css";

export default function ({ toggleSidebar, sidebar }) {
  return (
    <>
      {sidebar ? (
        <div className={classes.backdrop} onClick={toggleSidebar}></div>
      ) : null}
      <div
        className={
          sidebar
            ? [classes.sidebar, classes.showSidebar].join(" ")
            : classes.sidebar
        }
      >
        <div onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path>
          </svg>
        </div>
        <ul>
          <li>
            <Link onClick={toggleSidebar} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} to="/aboutUs">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} to="/events">
              events
            </Link>
          </li>
          <li>
            <Link onClick={toggleSidebar} to="/contactUs">
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
