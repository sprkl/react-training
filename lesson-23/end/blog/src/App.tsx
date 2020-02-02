import React from "react";
import "./App.css";

import { connect } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {props.loading && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
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

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading
  };
};

export default connect(mapStateToProps)(App);
