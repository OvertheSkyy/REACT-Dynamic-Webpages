import React from "react";
import {Link} from 'react-router-dom';

const ArticlesList = ({articles}) => (
  <div>
    {articles.map((article, key) => (
      <Link key={key} to={`/articles-page/${article.name}`}>
        <h2>{article.title}</h2>
        <p>{article.content[0].substring(0, 50)}...</p>
      </Link>
    ))}
  </div>
)

export default ArticlesList;