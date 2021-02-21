import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './Blog.module.css'
import {CounterContext} from './index'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function CustomCard({data,setdSelecteddata}) {
  let { path, url } = useRouteMatch();
  return (
    <>
     <Link className={style.card} onClick={()=>setdSelecteddata(data)}  to={`${url}/${data.label}`}>  
      <div className={style.card_label}>{data.label}</div>
      <div className={style.card_title}>{data.title}</div>
      <div className={style.card_bottomLabel}>
      <div >Continue Reading</div>
      <div className={style.card_border_gradient} style={{width:"48%"}}></div>
      </div>
    </Link>
    </>
  );
}
