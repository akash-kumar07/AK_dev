import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Blogs from "./Containers/Blog/index";
import Events from "./Containers/Events/Events";
import ContactUs from "./Containers/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 71) {
      return setScrolled(true);
    } else if (window.scrollY > 70) {
      return setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <Router>
        <div>
          <Navbar scrolled={scrolled} />

          <Switch>
            <Route path="/aboutUs"></Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/media"></Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
