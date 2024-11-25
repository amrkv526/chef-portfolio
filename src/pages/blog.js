import React from 'react';
import BlogArticleCard from '../components/articleCard';

function Blog() {
  const articles = [
    {
      title: '5 Tips for a Healthy Lifestyle',
      image: 'https://via.placeholder.com/300',
      text: 'Discover easy and practical ways to live a healthier life.',
    },
    {
      title: 'Top 10 Recipes for Busy Weeknights',
      image: 'https://via.placeholder.com/300',
      text: 'Quick and delicious recipes to save your time.',
    },
    {
      title: 'Exploring the World: Travel on a Budget',
      image: 'https://via.placeholder.com/300',
      text: 'Learn how to travel without breaking the bank.',
    },
  ];

  return (
    <div className="blog-articles-container">
      {articles.map((article, index) => (
        <BlogArticleCard
          key={index}
          title={article.title}
          image={article.image}
          text={article.text}
        />
      ))}
    </div>
  );
}

export default Blog;
