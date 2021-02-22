import React, { useState, createContext }from 'react';

import CardSection from './CardSection'
import style from './Blog.module.css'
import BlogDetail from './BlogDetail'
import blogdata from "./blogsData.json";
import Banner from "../../Components/Banner/Banner";
import RouteBar from "../../Components/RouteBar/RouteBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import NavPlaceholder from "../../Components/NavPlaceholder/NavPlaceholder";


// export const CounterContext = createContext();


function Blogs(props) {
  const [data, setdata] = useState(blogdata);
  // const [selectedData, setdSelecteddata] = useState({});

  let { path, url } = useRouteMatch();
console.log('path',path)
    return (
        <>
         {/* <CounterContext.Provider value={[data,selectedData,setdSelecteddata]}> */}
          <NavPlaceholder/>
             <div className={style.blog}> 
                <Switch>
                 <Route exact  path="/blogs">
                 <RouteBar title="Blogs" routeArr={["Home", "Blogs"]} />
                   <Banner
                     company="AK International Events"
                     desc="All Events are updated daily"
                    />
                   <CardSection/>
                 </Route>
                 <Route   path={`${path}/:blogName`}>
                   <RouteBar title="Blogs" routeArr={["Home", "Blogs"]} />
                   <BlogDetail/>
                 </Route>
                </Switch>   
             </div>
          {/* </CounterContext.Provider> */}
           
        </>
    );
}

export default Blogs;