import React from 'react';
import style from './Blog.module.css'

function BlogHeader(props) {
    return (
        <div className={style.blog_header}>
            <div style={{marginLeft:"10.66%",}}>
                 Blog
            </div>
            <div style={{}} >
               <span >
                   Home
               </span>
               <span>*</span>
               <span>
                   Blogs
               </span>
            </div>
        </div>
    );
}

export default BlogHeader;