import * as React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Blog = (props: any) => {
  return (
    <div className="container">
      <h1>Latest blog posts</h1>

      {props.articles.map((article: any) => (
        <div key={article.id} className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{article.title}</span>
            <p>{article.body}</p>
          </div>
          <div className="card-action">
            <Link to={`/${article.id}`}>Lire l'article</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Blog);
