import React, { useState, useEffect,useContext } from "react";
import BlogCard from './BlogCard'
import style from './Blog.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// import {CounterContext} from './index'

import data from "./blogsData.json";

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
function CardSection(props) {
  // const [data,selectedData,setdSelecteddata] = useContext(CounterContext);
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
        <div className={style.blog_cardSection_Main}>
          <div className={style.blog_cardSection}>
            {currentData.map((data)=><BlogCard data={data} />)
            }
            </div>
            <div className={styles().root}>
              <Pagination count={count} onChange={onChange} page={pageNo} />
            </div>
        </div>
    );
}

export default CardSection;