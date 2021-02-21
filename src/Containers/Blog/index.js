import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogHeader from './BlogHeader'
import BlogSectionOne from './BlogSectionOne'
import CardSection from './CardSection'
import style from './Blog.module.css'
function Blogs(props) {
    return (
        <>
             <div className={style.blog}>
                <BlogHeader/>
                <Switch>
                 <Route path="/blogs">
                   <BlogSectionOne/>
                   <CardSection/>
                 </Route>
                 {/* <Route path="/">
                 </Route> */}
                </Switch>
             </div>
        </>
    );
}

export default Blogs;