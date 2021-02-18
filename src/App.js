import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 101) {
      return setScrolled(true);
    } else if (window.scrollY > 100) {
      return setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Router>
      <div>
        <Navbar scrolled={scrolled} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <div style={{ height: "200vh" }}></div> */}
        <Switch>
          <Route path="/aboutUs"></Route>
          <Route path="/events"></Route>
          <Route path="/media"></Route>
          <Route path="/contactUs"></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
