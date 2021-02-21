import React from "react";
import * as classes from "./RouteBar.module.css";

export default function (props) {
  const { title, routeArr } = props;
  return (
    <>
      <div className={classes.bar}>
        <p>{title}</p>
        <p>
          {routeArr.map((elem, index) => (
            <React.Fragment key={index}>
              {elem} {index !== routeArr.length - 1 ? <span></span> : null}
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
}
