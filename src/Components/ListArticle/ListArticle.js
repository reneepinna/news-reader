export default function ListArticle({ article }) {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = article;

  return <div>
    <p>{title}</p>
    <p>{description}</p>
  </div>;
}
