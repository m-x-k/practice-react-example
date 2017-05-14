import Api from '../Api';

import { data } from '../../testData';

const api = new Api(data);

describe('Api', () => {
  const articles = api.getArticles();
  const authors = api.getAuthors();
  const rawArticle = data.articles[0];
  const rawAuthor = data.authors[0];

  it('exposes articles as an object', () => {
    expect(articles).toHaveProperty(rawArticle.id);
    expect(articles[rawArticle.id].title).toBe(rawArticle.title);
  });

  it('exposes authors as an object', () => {
    expect(authors).toHaveProperty(rawAuthor.id);
    expect(authors[rawAuthor.id].title).toBe(rawAuthor.title);
  });

})
