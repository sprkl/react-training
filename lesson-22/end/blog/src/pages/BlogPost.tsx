import React from "react";
import { render } from "@testing-library/react";

const BlogPost = (props: any) => {
  console.log(props);

  return (
    <div className="container">
      <h1>Article</h1>
      <h2>PostId : {props.match.params.postId}</h2>
    </div>
  );
};

export default BlogPost;
