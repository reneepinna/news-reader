import './ListArticle.scss';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ListArticle({ article }) {
  const { title, description, urlToImage, publishedAt } = article;
  const navigate = useNavigate()

  const date = dayjs(publishedAt).format('MMMM D, YYYY');

  return (
    <article className='listArticle' onClick={() => navigate("/article", {state: {article: article}})}>
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
