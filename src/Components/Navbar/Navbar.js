import React from "react";
import { Link, useLocation } from "react-router-dom";

import * as classes from "./Navbar.module.css";
import Logo from "../../Assets/logo.png";

export default function ({ scrolled }) {
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
              <Link className={classes.link} to="/aboutUs">
                about us
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/events">
                events
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/media">
                media
              </Link>
            </li>
            <li>
              <Link className={classes.link} to="/contactUs">
                contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
