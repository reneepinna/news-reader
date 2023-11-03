import { useEffect, useState } from 'react';
import { getNews } from '../../apiCalls';
import './Homepage.scss';
import ListDisplay from '../ListDisplay/ListDisplay';

export default function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!articles.length) {
      getNews().then(data => setArticles(data));
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
