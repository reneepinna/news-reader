import './Article.scss';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Article() {
  const { state } = useLocation();
  const { article } = state;
  const {
    source,
    author,
    url,
    title,
    description,
    urlToImage,
    publishedAt,
    content,
  } = article;
  const navigate = useNavigate()
  const date = dayjs(publishedAt).format('dddd, MMMM D, YYYY h:mm A	');

  return (
    <main className='article-page'>
      <article className='article-body'>
      <div className='icon-left' onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faArrowLeft} size='xl' back/>
      </div>
        <h2 className='title'>{title.split(' -')[0]}</h2>
        <p>{description}</p>
        <p className='author'>By {author.toLowerCase()}</p>
        <p className='date'>{date}</p>
        <hr class='separator' />
        <img className='article_img' src={urlToImage} />
        <p className='source'>{source.name}</p>
        <p>{content}</p>
      </article>
    </main>
  );
}
