import React, { useEffect, useState } from 'react';
import style from './Blog.module.css'
import face from "../../Assets/face.png";
import f from "../../Assets/social/Group3687.svg";
import t from "../../Assets/social/Group3688.svg";
import l from "../../Assets/social/Group3689.svg";
import data from "./blogsData.json";
import BlogCard from './BlogCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory,
    useParams
  } from "react-router-dom";

function BlogDetail() {
    const [blogDetail,setBlogDeatil]=useState({})
    
    let { blogName } = useParams();

   useEffect(()=>{
    let a=data.filter((data)=>{
        if(data.label===blogName){
           return data
        }
    })
    setBlogDeatil(a[0])
   },[])

    return (
        <>
            <div className={style.cardDetail} >
              <div className={style.cardDetail_bg}>
                 {blogDetail?.label}
              </div>
              <div className={style.cardDetail_main}>
                <div className={style.cardDetail_topic}>
                    <div>{blogDetail?.topic?.data1}</div>
                    <div  className={style.cardDetail_data2}>{blogDetail?.topic?.data2}</div>
                    <div>{blogDetail?.topic?.data3}</div>
                    <div style={{width:"100%"}}>
                        <img style={{width:"100%"}} src={face} alt="Eikonha" />
                        <div style={{color: "#232323",font: "var(--unnamed-font-style-normal) normal 600 var(--unnamed-font-size-16)/48px var(--unnamed-font-family-poppins)",textAlign:"center"}}>picture title comes here</div>
                    </div>
                </div>
                <div className={style.cardDetail_subTopic}>
                   {blogDetail?.subTopic?.map((d,index)=><div style={{margin:"14px 0px"}}key={index}>{d}</div>)}
                </div>
                <div className={style.cardDetail_likesmain}>
                    <div className={style.cardDetail_likes}>
                        <div style={{color:"grey",textAlign:"center"}}>24</div>
                    </div>
                </div>
                <div className={style.cardDetail_writerblock}>
                   <div style={{display:"flex",flexDirection:"column",alignContent:"space-between"}}>
                      <div>
                          
                      </div>
                   </div>
                   <div style={{display:"flex",flexDirection:"column"}}>
                       <div  style={{}}>{blogDetail?.writer?.name}</div>
                       <div>{blogDetail?.writer?.designation}</div>
                       <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. invidunt ut labore et.</div>
                       <div style={{display:"flex",justifyContent:"center"}}>
                         <div style={{width:"4%"}}>
                            <img style={{width:"100%"}} src={f} alt="Eikonha" />
                         </div>
                         <div style={{width:"4%"}}>
                            <img style={{width:"100%"}} src={l} alt="Eikonha" />
                         </div>
                         <div style={{width:"4%"}}>
                            <img style={{width:"100%"}} src={t} alt="Eikonha" />
                         </div>
                       </div>
                   </div>
                </div>

              </div>
             {blogDetail?.relatedBlogs &&<div className={style.cardDetail_relatedBlogs_section}>
                    <div>Related Posts</div>
                    <div  className={style.cardDetail_relatedBlogs}>
                    {blogDetail?.relatedBlogs?.map((data)=><BlogCard relatedFlag={true} data={data}/>)}
                    </div>
                </div>}
            </div>  
        </>
    );
}

export default BlogDetail;