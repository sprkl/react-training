import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/:postId" component={BlogPost}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
