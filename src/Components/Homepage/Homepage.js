import { useEffect, useState } from 'react';
import getNews from '../../apiCalls';
import ListArticle from '../ListArticle/ListArticle';

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews().then(data => setArticles(data.articles));
  }, []);

  const list = articles.map(article => <ListArticle key={article.publishedAt} article={article} />)

  return (
    <div>
      <header>
        <p>News Reader</p>
        <p>Search Comp</p>
      </header>
      <main>{list}</main>
    </div>
  );
}
