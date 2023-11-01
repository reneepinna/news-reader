export function getNews() {
  return fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=b8fc9fa1e6694440bd9372d8f6ada677',
  ).then(resp => resp.json());
}

export function getSearch(searchQuery) {
  //is this how the query works? ? or & Does order matter
  return fetch(
    `https:newsapi.org/v2/everything?q=${searchQuery}?language=us&apiKey=b8fc9fa1e6694440bd9372d8f6ada677`,
  ).then(resp => resp.json());
}
