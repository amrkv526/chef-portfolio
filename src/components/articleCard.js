import React from 'react';
import { useParams } from 'react-router-dom';

function BlogArticle({ article: propArticle }) {
  const { id } = useParams();

  const articles = {
    1: {
      title: '5 Tips for a Healthy Lifestyle',
      image: 'https://via.placeholder.com/300',
      text: 'Discover easy and practical ways to live a healthier life. Eating right, staying active, and managing stress effectively are key pillars.',
    },
    2: {
      title: 'Top 10 Recipes for Busy Weeknights',
      image: 'https://via.placeholder.com/300',
      text: 'Quick and delicious recipes that will help you save time while preparing nutritious meals for your family.',
    },
    3: {
      title: 'Exploring the World: Travel on a Budget',
      image: 'https://via.placeholder.com/300',
      text: 'Learn how to travel without breaking the bank. Discover tips on finding cheap flights, accommodations, and free activities.',
    },
  };

  const article = propArticle || articles[Number(id)];

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="blog-article-container">
      <h1 className="blog-article-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="blog-article-image" />
      <p className="blog-article-text">{article.text}</p>
    </div>
  );
}

export default BlogArticle;
