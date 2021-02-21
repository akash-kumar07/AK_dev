import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import * as classes from "./Events.module.css";

import NavPlaceholder from "../../Components/NavPlaceholder/NavPlaceholder";
import RouteBar from "../../Components/RouteBar/RouteBar";
import Banner from "../../Components/Banner/Banner";
import EventCard from "../../Components/EventCard/EventCard";

import data from "./events.json";

const styles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    background: "none",

    "& ul": {
      margin: "auto",
    },

    "& .MuiPaginationItem-page.Mui-selected": {
      background: "#fff",
      boxShadow: "1px 1px 5px rgba(0,0,0,.4)",
    },
  },
}));

export default function () {
  const [pageNo, setPageNo] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const count = Math.ceil(data.length / 5);

  useEffect(() => {
    const start = 5 * (pageNo - 1);
    const end = start + 5;
    setCurrentData(data.slice(start, end));
  }, [pageNo]);

  const onChange = (event, page) => {
    setPageNo(page);
  };

  return (
    <>
      <NavPlaceholder />
      <RouteBar title="Events" routeArr={["Home", "Events"]} />
      <Banner
        company="AK International Events"
        desc="All Events are updated daily"
      />
      <div className={classes.eventList}>
        {currentData.map((elem, index) => (
          <React.Fragment key={index}>
            <EventCard data={elem} />
          </React.Fragment>
        ))}
        <div className={styles().root}>
          <Pagination count={count} onChange={onChange} page={pageNo} />
        </div>
      </div>
    </>
  );
}
