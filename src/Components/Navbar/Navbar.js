import React from "react";
import { Link, useLocation } from "react-router-dom";

import * as classes from "./Navbar.module.css";
import Logo from "../../Assets/logo.png";

export default function ({ scrolled, toggleSidebar }) {
  const current = useLocation().pathname === "/";

  return (
    <>
      <header
        className={
          current
            ? scrolled
              ? classes.header
              : [classes.header, classes.scrolled].join(" ")
            : scrolled
            ? [classes.header, classes.addBackground].join(" ")
            : [classes.header, classes.addBackground, classes.scrolled].join(
                " "
              )
        }
      >
        <nav>
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/">
                about us
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/events">
                events
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/">
                media
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/contactUs">
                contact us
              </Link>
            </li>
          </ul>
          <div className={classes.menu} onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path>
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}
