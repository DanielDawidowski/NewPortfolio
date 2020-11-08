import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
