import React from "react";
import * as classes from "./Banner.module.css";

export default function ({ company, desc }) {
  return (
    <>
      <div className={classes.banner}>
        <p className={classes.gradientHeading}>{company}</p>
        <p>{desc}</p>
      </div>
    </>
  );
}
