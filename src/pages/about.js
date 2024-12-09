import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Chef Di</h1>
      <div className="about-content">
        <div className="about-row">
          <p className="about-text paragraph1">
            A recent transplant from Jamaica, Chef Dionne Reid is a chef-restaurateur turned test cook.
          </p>
          <img 
            src="/images/chefdionne.jpg" 
            alt="Chef Dionne Reid Portrait" 
            className="about-image image1"
          />
        </div>
        <div className="about-row">
          <img 
            src="/images/chefdionne2.png" 
            alt="Contemporary Caribbean Dish" 
            className="about-image image2"
          />
          <p className="about-text paragraph2">
            Her love of contemporary Caribbean cuisine has woven its way into all her food philosophies and culinary adventures.
          </p>
        </div>
        <div className="about-row">
          <p className="about-text paragraph3">
            Food has brought her to kitchens in Boston and New York, France and now, Toronto. Yay, to new adventures!
          </p>
          <img 
            src="https://via.placeholder.com/150" 
            alt="Chef Dionne Cooking" 
            className="about-image image3"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
