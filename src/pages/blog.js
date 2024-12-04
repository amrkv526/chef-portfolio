import React from 'react';

function Blog() {
  const articles = [
    {
      title: '5 Tips for a Healthy Lifestyle',
      image: 'https://via.placeholder.com/150',
      text: 'Discover easy and practical ways to live a healthier life.',
      link: '/article/1',
    },
    {
      title: 'Top 10 Recipes for Busy Weeknights',
      image: 'https://via.placeholder.com/150',
      text: 'Quick and delicious recipes to save your time.',
      link: '/article/2',
    },
    {
      title: 'Exploring the World: Travel on a Budget',
      image: 'https://via.placeholder.com/150',
      text: 'Learn how to travel without breaking the bank.',
      link: '/article/3',
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">This Week's Blog</h1>
      <div className="blog-articles-container">
        {articles.map((article, index) => (
          <div key={index} className={`blog-article ${index % 2 === 0 ? 'article-image-left' : 'article-image-right'}`}>
            {index % 2 === 0 ? (
              <>
                <img src={article.image} alt={article.title} className="blog-article-image" />
                <div className="blog-article-content">
                  <h2 className="blog-article-title">{article.title}</h2>
                  <p className="blog-article-text">{article.text}</p>
                  <a href={article.link} className="blog-article-link">Read More</a>
                </div>
              </>
            ) : (
              <>
                <div className="blog-article-content">
                  <h2 className="blog-article-title">{article.title}</h2>
                  <p className="blog-article-text">{article.text}</p>
                  <a href={article.link} className="blog-article-link">Read More</a>
                </div>
                <img src={article.image} alt={article.title} className="blog-article-image" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
