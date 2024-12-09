import React from 'react';
import { useParams } from 'react-router-dom';

function BlogArticle({ article: propArticle }) {
  const { id } = useParams();

  const articles = {
    1: {
      title: `Secrets from the Chef's Table: 5 Pro Cooking Techniques for Home Cooks`,
      image: '/images/procooking.jpg',
      content: (
        <>
          <p>
            Cooking like a professional chef might seem daunting, but mastering a few simple techniques can transform your everyday meals into something extraordinary. Here are five pro tips that you can use in your kitchen today:
          </p>
          <h3>1. Perfect the Sear</h3>
          <p>
            The key to perfectly seared fish or meat is a hot pan and patience. Use a heavy-bottomed skillet, heat it until it’s smoking, and avoid overcrowding the pan. Pat your protein dry, season generously, and resist the urge to flip too soon. That golden crust? It's worth the wait.
          </p>
          <h3>2. Build Layers of Flavor</h3>
          <p>
            Professional chefs know that flavor comes in layers. Start with aromatics like garlic, onions, or shallots, then add spices, herbs, and liquids in stages. Don’t rush the process—letting ingredients cook fully at each step enhances the depth of flavor in your dish.
          </p>
          <h3>3. Finish with Acid</h3>
          <p>
            A squeeze of lemon, a splash of vinegar, or a dollop of yogurt can brighten up your dish and balance its flavors. Acidity acts like a seasoning, making every bite pop.
          </p>
          <h3>4. Master the Art of Plating</h3>
          <p>
            Presentation matters as much as taste. Use contrasting colors and textures, play with negative space, and always wipe the plate edges clean. Even simple dishes look gourmet when plated with care.
          </p>
          <h3>5. Cook with Your Senses</h3>
          <p>
            Don’t just rely on timers and recipes. Listen to the sizzle, watch the color changes, and taste frequently. Cooking is as much about intuition as it is about instructions.
          </p>
          <p>
            Try these tips and experience the magic of professional cooking at home. Who knows? You might discover your inner chef along the way.
          </p>
        </>
      ),
    },
    2: {
      title: 'Farm-to-Table: Why Ingredients Matter More Than Recipes',
      image: '/images/produce.jpg',
      content: (
        <>
          <p>
            In the culinary world, there's a saying: "Great dishes start with great ingredients." For Chef Dionne Reid, this philosophy is the foundation of every meal she creates. Here’s why focusing on ingredients matters more than the recipe itself.
          </p>
          <h3>The Power of Freshness</h3>
          <p>
            When you start with fresh, seasonal produce, you’re already halfway to a delicious dish. Fruits and vegetables at their peak need less seasoning and effort because their natural flavors shine. Imagine the vibrant sweetness of summer tomatoes or the earthy richness of autumn squash—ingredients like these make recipes sing.
          </p>
          <h3>Supporting Sustainability</h3>
          <p>
            Farm-to-table cooking isn't just about flavor; it's about responsibility. By sourcing locally and seasonally, we reduce food miles, support small farmers, and promote biodiversity. It’s a way to respect the land and honor the food we eat.
          </p>
          <h3>Letting Simplicity Shine</h3>
          <p>
            With high-quality ingredients, simplicity becomes a virtue. A drizzle of olive oil, a sprinkle of sea salt, and a fresh herb garnish are often all you need. The best dishes highlight their ingredients rather than masking them.
          </p>
          <p>
            Chef Reid’s commitment to this philosophy is evident in every dish she creates, from delicate salads to hearty mains. The next time you’re planning a meal, think about what’s fresh and in season—it’s a small change that makes a big difference.
          </p>
        </>
      ),
    },
    3: {
      title: 'A Day in the Life of a Chef: From Inspiration to Plate',
      image: '/images/chefCooking.jpg',
      content: (
        <>
          <p>
            Ever wondered what it’s like to live a day in the life of a professional chef? Step into Chef Dionne Reid’s shoes as she takes you through her daily routine, from inspiration to plate.
          </p>
          <h3>6:00 AM: Inspiration Strikes</h3>
          <p>
            Chef Reid begins her day with a strong cup of coffee and a quick scroll through her favorite food journals. She takes note of seasonal trends and thinks about how to incorporate them into her menus.
          </p>
          <h3>8:00 AM: Market Run</h3>
          <p>
            The local farmers' market is her second home. Chatting with vendors, handpicking the freshest produce, and discovering unique ingredients are the highlights of her morning. For Chef Reid, the market isn’t just a place to shop—it’s a source of creativity.
          </p>
          <h3>12:00 PM: Prep Time</h3>
          <p>
            Back in the kitchen, the real work begins. Slicing, dicing, roasting, and blending—it’s a symphony of movement as she and her team prep for the day’s meals. Every ingredient is handled with care, ensuring quality at every step.
          </p>
          <h3>5:00 PM: Service Begins</h3>
          <p>
            As the evening rush hits, the kitchen transforms into a battlefield. Orders come in rapid-fire, but Chef Reid remains calm and focused. Her team works in perfect sync, delivering plates that are as beautiful as they are delicious.
          </p>
          <h3>10:00 PM: Reflection</h3>
          <p>
            After service winds down, Chef Reid takes a moment to reflect on the day. What worked? What could be better? She jots down notes and ideas for tomorrow, always striving to push her craft forward.
          </p>
          <p>
            A chef’s day is a mix of art, science, and hustle—but for Chef Reid, it’s a labor of love. Each plate tells a story, and every meal is an opportunity to connect with her diners.
          </p>
        </>
      ),
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
      <div className="blog-article-content">{article.content}</div>
    </div>
  );
}

export default BlogArticle;
