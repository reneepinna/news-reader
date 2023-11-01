import './ListArticle.scss';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ListArticle({ article }) {
  const { title, description, urlToImage, publishedAt } = article;

  const date = dayjs(publishedAt).format('DD/MM/YYYY');

  return (
    <article className='listArticle'>
      <img className='listArticle_img' src={urlToImage} />
      <h3 className=''>{title}</h3>
      <p className='listArticle_text'>{description}</p>
      <p className='listArticle_date'>{date}</p>
      <div className='icon'>
        <FontAwesomeIcon icon={faArrowRight} color='#B20710' size='xl' back/>
      </div>
    </article>
  );
}
