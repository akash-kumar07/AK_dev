import React from 'react';
import BlogHeader from './BlogHeader'
import BlogSectionOne from './BlogSectionOne'
import CardSection from './CardSection'
import style from './Blog.module.css'
function Blogs(props) {
    return (
        <>
             <div className={style.blog}>
                <BlogHeader/>
                <BlogSectionOne/>
                <CardSection/>
             </div>
        </>
    );
}

export default Blogs;