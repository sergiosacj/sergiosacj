import React from "react";
import { About, Blog, Home, Projects } from "../pages";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" children={<About />} />
      <Route path="/blog" children={<Blog />} />
      <Route exact path="/" children={<Home />} />
      <Route path="/home" children={<Home />} />
      <Route path="/projects" children={<Projects />} />
    </Switch>
  );
};

export default Routes;
