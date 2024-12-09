import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const recipes = {
    1: {
      title: 'Jamaican Pepper Steak',
      image: '/images/pepperSteak.jpeg',
      intro: 'A flavorful beef dish with a rich sauce and colorful peppers.',
    },
    2: {
      title: 'Jamaican Grilled Stuffed Red Snapper',
      image: '/images/snapper.jpeg',
      intro: 'A stunning whole fish dish packed with aromatic seasonings.',
    },
    3: {
      title: 'Jamaican Stew Peas with Spinners',
      image: '/images/peaStew.webp',
      intro: 'A hearty and comforting dish with smoky flavors and dumplings.',
    },
      4: {
        title: 'Jamaican Pepper Steak',
        image: '/images/pepperSteak.jpeg',
        intro: 'A flavorful beef dish with a rich sauce and colorful peppers.',
      },
      5: {
        title: 'Jamaican Grilled Stuffed Red Snapper',
        image: '/images/snapper.jpeg',
        intro: 'A stunning whole fish dish packed with aromatic seasonings.',
      },
      6: {
        title: 'Jamaican Stew Peas with Spinners',
        image: '/images/peaStew.webp',
        intro: 'A hearty and comforting dish with smoky flavors and dumplings.',
      },
  };

  const articles = [
    {
      title: `Secrets from the Chef's Table: 5 Pro Cooking Techniques for Home Cooks`,
      image: '/images/procooking.jpg',
      text: 'Transform your cooking with these five simple yet powerful techniques.',
      link: '/blog/1',
    },
    {
      title: 'Farm-to-Table: Why Ingredients Matter More Than Recipes',
      image: '/images/produce.jpg',
      text: 'Discover why fresh, seasonal, and sustainable ingredients make a difference.',
      link: '/blog/2',
    },
  ];

  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="home-top-section">
        <h1>Welcome to Chef Di's Page</h1>
        <h2>Here's everything I'm cooking and writing this week</h2>
      </div>

      {/* Recipes Section */}
      <div className="home-recipes-section">
        <h2>What I'm Cooking This Week</h2>
        <div className="home-recipes-scroll">
          {Object.entries(recipes).map(([id, recipe]) => (
            <div key={id} className="home-recipe-card">
              <Link to={`/recipes/${id}`} className="home-recipe-link">
                <img src={recipe.image} alt={recipe.title} className="home-recipe-image" />
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.intro}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home-divider"></div>

      {/* Blog Section */}
      <div className="home-blog-section">
        <h2 className='home-blog-title'>This Week's Reading</h2>
        <div className="home-blog-content">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`home-blog-row ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
            >
              <div className="home-blog-image-wrapper">
                <a href={article.link} className="home-blog-image-link">
                  <img src={article.image} alt={article.title} className="home-blog-image" />
                </a>
              </div>
              <div className="home-blog-text-wrapper">
                <a href={article.link} className="home-blog-title-link">
                  <h3 className="home-blog-article-title">{article.title}</h3>
                </a>
                <p>{article.text}</p>
                <a href={article.link} className="home-blog-read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
