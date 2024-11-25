import React from 'react';

function BlogArticleCard({ title, image, text }) {
  return (
    <div className="blog-article-card">
      <img src={image} alt={title} className="blog-article-image" />
      <h2 className="blog-article-title">{title}</h2>
      <p className="blog-article-text">{text}</p>
    </div>
  );
}

export default BlogArticleCard;
