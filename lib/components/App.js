import React from 'react';

import Api from '../data/Api';
import {data} from '../testData';

import ArticleList from './ArticleList';

const api = new Api(data);

class App extends React.Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  render() {
    return (
      <ArticleList
      articles={this.state.articles}
      authors={this.state.authors}
      />
    );
  }
}

export default App;
