export default function getNews() {
  return fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=b8fc9fa1e6694440bd9372d8f6ada677',
  )
    .then(resp => resp.json())
    // .then(data => console.log(data));
}
