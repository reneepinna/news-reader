import './ListDisplay.scss';
import ListArticle from '../ListArticle/ListArticle';

export default function ListDisplay({ articles }) {
  
  const list = articles.map(article => (
    <ListArticle key={article.title} article={article} />
  ));

  return <div className='news-grid'>{list}</div>;
}
