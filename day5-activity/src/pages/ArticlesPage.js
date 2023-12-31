import React from "react";
import {useParams} from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesPage = () => {
  const {name} = useParams();
  const article = articleContent.find(article => article.name === name);

  if(!article) return <h1>Article does not exist!</h1>

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlesPage;