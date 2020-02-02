import React from "react";

import { connect } from "react-redux";

import { deleteArticle } from "../actionCreators/articleActions";

const BlogPost = (props: any) => {
  console.log(props);

  const article = props.articles.find(
    (article: any) => `${article.id}` === props.match.params.postId
  );

  const onDelete = async () => {
    await props.deleteArticle(article.id);
    props.history.push("/blog");
  };

  return (
    <div className="container">
      <h1>Article</h1>
      <h2>PostId : {props.match.params.postId}</h2>

      {article ? (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{article.title}</span>
            <p>{article.body}</p>
          </div>
          <div className="card-action">
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = {
  deleteArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
