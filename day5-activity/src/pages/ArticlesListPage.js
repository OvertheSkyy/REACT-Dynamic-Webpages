import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
  <div>
    <ArticlesList articles={articleContent}/>
  </div>
)

export default ArticlesListPage;