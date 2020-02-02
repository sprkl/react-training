import * as React from "react";

import { Link } from "react-router-dom";

const Blog = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(function loadData() {
    (async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/posts");

      const data = await response.json();

      setArticles(data);
    })();
  }, []);

  return (
    <div className="container">
      <h1>Latest blog posts</h1>

      {articles.map((article: any) => (
        <div key={article.id} className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively.
            </p>
          </div>
          <div className="card-action">
            <Link to={`/${article.id}`}>This is a link</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
