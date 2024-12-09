import React from 'react';

function Blog() {
  const articles = [
    {
      title: `Secrets from the Chef's Table: 5 Pro Cooking Techniques for Home Cooks`,
      image: '/images/procooking.jpg',
      text: 'Transform your cooking with these five simple yet powerful techniques straight from a professional chef. Learn how to sear, layer flavors, and plate like a pro to elevate your home-cooked meals.',
      link: '/blog/1',
    },
    {
      title: 'Farm-to-Table: Why Ingredients Matter More Than Recipes',
      image: '/images/produce.jpg',
      text: `Great dishes start with great ingredients. Discover why Chef Dionne Reid believes fresh, seasonal, and sustainable ingredients are the secret to unforgettable meals.`,
      link: '/blog/2',
    },
    {
      title: 'Exploring the World: Travel on a Budget',
      image: '/images/chefCooking.jpg',
      text: `Step into Chef Dionne Reid’s kitchen and experience the creativity, hustle, and heart that go into every dish. From sourcing fresh ingredients to delivering artful plates, see how a chef’s day unfolds.`,
      link: '/blog/3',
    },
  ];

  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">This Week's Blog</h1>
      <div className="blog-page-content">
        {articles.map((article, index) => (
          <div className="blog-page-row" key={index}>
            {index % 2 === 0 ? (
              <>
                <a href={article.link} className="blog-page-image-link">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="blog-page-image"
                  />
                </a>
                <div className="blog-page-text">
                  <a href={article.link} className="blog-page-title-link">
                    <h2 className="blog-page-article-title">{article.title}</h2>
                  </a>
                  <p className="blog-page-article-text">{article.text}</p>
                  <a href={article.link} className="blog-page-article-link">
                    Read More
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="blog-page-text">
                  <a href={article.link} className="blog-page-title-link">
                    <h2 className="blog-page-article-title">{article.title}</h2>
                  </a>
                  <p className="blog-page-article-text">{article.text}</p>
                  <a href={article.link} className="blog-page-article-link">
                    Read More
                  </a>
                </div>
                <a href={article.link} className="blog-page-image-link">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="blog-page-image"
                  />
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
