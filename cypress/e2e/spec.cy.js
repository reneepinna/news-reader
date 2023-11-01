describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=b8fc9fa1e6694440bd9372d8f6ada677',
      {
        fixture: 'news.json',
      },
    ).as('news');
  });
  it('', () => {
    cy.visit('http://localhost:3000/');
  });
});
