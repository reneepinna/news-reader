import { useEffect, useState } from 'react';
import { getNews } from '../../apiCalls';
import ListArticle from '../ListArticle/ListArticle';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import ListDisplay from '../ListDisplay/ListDisplay';

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!articles.length) {
      getNews().then(data => setArticles(data.articles));
    }
  }, []);

  return (
    <div className='page'>
      <main>
        <h2 className='h2'>Latest News</h2>
        <ListDisplay articles={articles}/>
      </main>
    </div>
  );
}
