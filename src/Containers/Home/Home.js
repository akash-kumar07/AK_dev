import React from "react";

import * as classes from "./Home.module.css";
import HeadImage from "../../Assets/head.png";

export default function () {
  return (
    <div className={classes.head}>
      <div className={classes.background}></div>
      <div className={classes.discover}>
        <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
        <button>Discover More</button>
      </div>
      <div className={classes.image}>
        <img src={HeadImage} alt="head" />
      </div>
    </div>
  );
}
