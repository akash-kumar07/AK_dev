import React, { useContext } from "react";
import CustomCard from './Card'
import style from './Blog.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {CounterContext} from './index'

function CardSection(props) {
  const [data,selectedData,setdSelecteddata] = useContext(CounterContext);
    return (
        <div className={style.blog_cardSection}>
            {data.map((data)=><CustomCard data={data} setdSelecteddata={setdSelecteddata}/>)
            }
             <Pagination style={{margin:"26px auto",width:"unset"}} count={5} />
        </div>
    );
}

export default CardSection;