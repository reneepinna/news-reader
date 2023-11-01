import { useEffect, useState } from 'react';
import getNews from '../../apiCalls';
import ListArticle from '../ListArticle/ListArticle';
import './Homepage.scss';
import Header from '../Header/Header';

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews().then(data => setArticles(data.articles));
  }, []);

  const list = articles.map(article => (
    <ListArticle key={article.publishedAt} article={article} />
  ));

  return (
    <div className='homepage'>
      <main>
        <h2 className='h2'>Latest News</h2>
        <div className='latest-news'>{list}</div>
      </main>
    </div>
  );
}
