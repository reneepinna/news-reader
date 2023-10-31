import './ListArticle.scss'
import dayjs from 'dayjs';

export default function ListArticle({ article }) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
  } = article;

  const date = dayjs(publishedAt).format('DD/MM/YYYY')

  return <article className="listArticle">
    <img className="listArticle_img" src={urlToImage}/>
    <h3 className="">{title}</h3>
    <p className="listArticle_text">{description}</p>
    <p className="listArticle_text">{date}</p>
    <a></a>
  </article>;
}
