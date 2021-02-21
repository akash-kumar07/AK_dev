import React from 'react';
import style from './Blog.module.css'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useRouteMatch,
   useHistory,
   useParams
 } from "react-router-dom";
function BlogHeader(props) {

   let { blogName } = useParams();
    return (
        <div className={style.blog_header}>
           <Link to="/blogs">
           <div className={style.blog_header_label_left}>
              Blogs
           </div>
           </Link>
           <div className={style.blog_header_label_right}>
              <span>Home</span>
              <span style={{
                             border:" 3px solid black",
                             borderRadius: "32px",
                             width: "5px",
                             height: "5px",
                             background: "transparent black 0% 0% no-repeat padding-box",
                          }}>
               </span>
              <span>Blog</span>
             { blogName&& <><span style={{
                             border:"3px solid black",
                             borderRadius: "32px",
                             width: "5px",
                             height: "5px",
                             background: "transparent black 0% 0% no-repeat padding-box",
                          }}>
               </span>
               <span>{blogName}</span></>}
           </div>
        </div> 
    );
}

export default BlogHeader;