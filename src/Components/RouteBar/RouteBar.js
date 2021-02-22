import React from "react";
import * as classes from "./RouteBar.module.css";

import {
  useParams
} from "react-router-dom";

export default function (props) {
  let { blogName } = useParams();
  const { title, routeArr } = props;


  let routeArrNe=blogName?[...routeArr,blogName]:[...routeArr]


  return (
    <>
      <div className={classes.bar}>
        <p>{title}</p>
        <p>
          {routeArrNe.map((elem, index) => (
            <React.Fragment key={index}>
              {elem} {index !== routeArrNe.length - 1 ? <span></span> : null}
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
}
