import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearch } from '../../apiCalls';
import ListDisplay from '../ListDisplay/ListDisplay';

export default function SearchPage() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (query) {
      getSearch(query).then(data => setArticles(data.articles));
    } else if (query === '') {
      setArticles([]);
    }
  }, [query]);

  return (
    <div className='page'>
      <h2 className='h2'>Results for {query}</h2>
      <ListDisplay articles={articles} />;
    </div>
  );
}
