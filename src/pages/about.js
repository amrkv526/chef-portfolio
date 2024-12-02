import React from 'react';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        A recent transplant from Jamaica, Chef Dionne Reid is a chef-restaurateur turned test cook, 
        food journalist, and supper club host of OnlyTogether. Her love of contemporary Caribbean 
        cuisine has woven its way into all her food philosophies and culinary adventures. Food has 
        brought her to kitchens in Boston and New York, France and now, Toronto. Yay, to new adventures!
      </p>
      <div className="about-images">
        <img 
          src="/images/chefdionne.jpg" 
          alt="Chef Dionne Reid Portrait" 
          className="about-image"
        />
        <img 
          src="/images/chefdionne2.png" 
          alt="Contemporary Caribbean Dish" 
          className="about-image"
        />
      </div>
    </div>
  );
}

export default About;
