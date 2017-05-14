import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/index';

class Article extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
  };
  render() {
    const {article, author} = this.props;
    return (
      <div style={styles.articles}>
        <div style={styles.title}>{article.title}</div>
        <div>{article.date}</div>
        <div>{author.firstname} {author.lastname}</div>
        <div style={styles.body}>{article.body}</div>
      </div>
    );
  }
}
export default Article;
