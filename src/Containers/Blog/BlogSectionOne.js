import React from 'react';
import style from './Blog.module.css'
function BlogSectionOne(props) {
    return (
        <>
          <div className={style.blog_sectionOne}>
            <div className={style.blog_sectionOne_textOne}>
               Ak International Blog
            </div>
            <div className={style.blog_sectionOne_textTwo}>
               Attractive articles updated daily
            </div>
           </div>
        </>
    );
}

export default BlogSectionOne;