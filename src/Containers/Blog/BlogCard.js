import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './Blog.module.css'
// import {CounterContext} from './index'
import  cardImg from '../../Assets/head.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function ({data,relatedFlag}) {
  let { path, url } = useRouteMatch();
 

  return (
    <>
     <Link className={style.blog_card}   to={relatedFlag?`${data.label}`:`${url}/${data.label}`}>  
      <div className={style.blog_cardImg}>
        <img  src={cardImg}/>
      </div>
      <div className={style.card_label}>{data.label}</div>
      <div className={style.card_date}>{"12 FEB 2020"}</div>
      <div className={style.card_title}>{data.title}</div>
      <div className={style.card_bottomLabel}>
      <div >Continue Reading</div>
      <div className={style.card_border_gradient}></div>
      </div>
    </Link>
    </>
  );
}
