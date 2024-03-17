import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Navigaton/Navigation";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Blogs from "./components/Blogs/Blogs";

function App() {


  return (
    <div className="App">
      <div className="row">
        <div>
          <Router>
            <Navigation></Navigation>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/about">
                <About></About>
              </Route>

              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/details/:projectId">
                <ProjectDetails></ProjectDetails>
              </Route>

              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/blogs">
                <Blogs></Blogs>
              </Route>

              <Route path="/footer">
                <Footer></Footer>
              </Route>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
