import React from 'react';
import style from './Blog.module.css'

function BlogHeader(props) {
    return (
        <div className={style.blog_header}>
           <div className={style.blog_header_label_left}>
              Blogs
           </div>
           <div className={style.blog_header_label_right}>
              <span>Home</span>
              <span style={{
                             border:" 3px solid black",
                             borderRadius: "32px",
                             width: "8px",
                             width: "5px",
                             height: "5px",
                             background: "transparent black 0% 0% no-repeat padding-box",
                          }}>
               </span>
              <span>Blog</span>
           </div>
        </div> 
    );
}

export default BlogHeader;