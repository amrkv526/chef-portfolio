import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe({ recipe: propRecipe }) {
  const { id } = useParams();

  const recipes = {
    1: {
      title: 'Pepper Steak',
      image: '/images/pepperSteak.jpeg',
      tags: ['Dinner', 'Beef'],
      intro: 'A flavorful beef dish with a rich sauce and colorful peppers.',
      ingredients: [
        { quantity: "1 (1¼-pound)", item: "boneless strip steak, trimmed" },
        { quantity: "1 tablespoon", item: "water" },
        { quantity: "¼ teaspoon", item: "baking soda" },
        { quantity: "4 teaspoons", item: "cornstarch, divided" },
        { quantity: "1 tablespoon", item: "dark soy sauce" },
        { quantity: "1 teaspoon", item: "pepper, divided" },
        { quantity: "½ teaspoon", item: "table salt" },
        { quantity: "2 cups", item: "beef broth" },
        { quantity: "2 tablespoons", item: "Worcestershire sauce" },
        { quantity: "2 tablespoons", item: "oyster sauce" },
        { quantity: "1 teaspoon", item: "packed brown sugar" },
        { quantity: "½ teaspoon", item: "garlic powder" },
        { quantity: "½ teaspoon", item: "onion powder" },
        { quantity: "2 tablespoons plus 2 teaspoons", item: "vegetable oil, divided" },
        { quantity: "2 tablespoons", item: "dark rum or brandy" },
        { quantity: "½ large", item: "red bell pepper, stemmed, seeded, and cut into ¼-inch-wide strips" },
        { quantity: "½ large", item: "yellow bell pepper, stemmed, seeded, and cut into ¼-inch-wide strips" },
        { quantity: "½ large", item: "green bell pepper, stemmed, seeded, and cut into ¼-inch-wide strips" },
        { quantity: "3", item: "scallions, cut into 2-inch pieces" },
        { quantity: "5 cloves", item: "garlic, sliced" },
        { quantity: "1 teaspoon", item: "whole allspice berries, coarsely ground" },
        { quantity: "½ teaspoon", item: "grated fresh ginger" },
        { quantity: "½ teaspoon", item: "minced fresh thyme" },
        { quantity: "½ teaspoon", item: "minced Scotch bonnet chile" },
      ],
      steps: `
  ### Before You Begin
  Prepare the vegetables and aromatics while the beef rests. Dark soy sauce is thicker and a bit sweeter than the all-purpose kind; shop for it online or at an Asian market. You can substitute a habanero chile for the Scotch bonnet. We prefer coarsely ground allspice berries (use a spice grinder or mortar and pestle), but ½ teaspoon ground allspice can be used. Serve over rice or rice and peas. If you prefer, you can use a carbon-steel skillet instead of a nonstick skillet.
  
  ### Instructions
  1. Slice beef crosswise ¼ inch thick. Cut slices into ¼-inch-thick strips. Combine water and baking soda in medium bowl. Add beef and toss to coat. Let sit at room temperature for 5 minutes.
  2. Add 1 teaspoon cornstarch, soy sauce, ½ teaspoon pepper, and salt to beef and toss until well combined. Refrigerate for at least 1 hour or up to 2 hours.
  3. Whisk beef broth, Worcestershire sauce, oyster sauce, sugar, garlic powder, onion powder, remaining 1 tablespoon cornstarch, and remaining ½ teaspoon pepper in bowl.
  4. Heat 2 teaspoons oil in 12-inch nonstick skillet over medium-high heat until just smoking. Add half of beef in single layer. Cook without stirring for 1 minute. Continue to cook, stirring occasionally, until spotty brown on both sides, about 1 minute longer. Transfer to clean bowl. Repeat with 2 teaspoons oil and remaining beef. Remove now-empty skillet from heat. Add rum and, using spatula, scrape any browned bits from skillet. Transfer any remaining liquid and browned bits to bowl with beef.
  5. Return skillet to medium-high heat, add 2 teaspoons oil, and heat until just smoking. Add bell peppers and cook, stirring occasionally, until peppers are spotty brown but still crisp, 2 to 3 minutes. Transfer peppers to bowl with beef.
  6. Return skillet to medium-high heat, add remaining 2 teaspoons oil, and heat until just smoking. Add scallions and cook, stirring occasionally, until spotty brown, 1 to 2 minutes. Add garlic, allspice, ginger, thyme, and Scotch bonnet. Cook, stirring frequently, until garlic is lightly browned and fragrant, about 1 minute. Transfer scallion mixture to bowl with beef and peppers.
  7. Whisk beef broth mixture to recombine. Add mixture to skillet; reduce heat to medium; and cook, stirring occasionally, until thickened (spatula will start to leave trail that quickly fills in), 4 to 6 minutes. Stir in beef and vegetables and cook until heated through, about 1 minute. Season with salt and pepper to taste. Serve.
      `,
      servings: 4,
    },
    2: {
      title: 'Jamaican Grilled Stuffed Red Snapper',
      image: '/images/snapper.jpeg',
      tags: ['Pescatarian', 'Fish & Seafood', 'Main Courses'],
      intro: 'Whole snapper—stuffed with highly seasoned greens, crimped in foil, and sizzled over the fire—isnt just festive. It is practical summertime entertaining.',
      ingredients: [
        // Stuffing ingredients
        { quantity: "2 tablespoons", item: "unsalted butter" },
        { quantity: "6", item: "scallions, sliced thin (½ cup)" },
        { quantity: "5 cloves", item: "garlic, minced" },
        { quantity: "2 teaspoons", item: "minced fresh thyme" },
        { quantity: "½ teaspoon", item: "grated fresh ginger" },
        { quantity: "½ teaspoon", item: "minced Scotch bonnet chile" },
        { quantity: "4 ounces", item: "okra, trimmed and chopped (½ cup)" },
        { quantity: "½ teaspoon", item: "table salt" },
        { quantity: "¼ teaspoon", item: "pepper" },
        { quantity: "¼ teaspoon", item: "ground allspice" },
        { quantity: "8 ounces", item: "callaloo, stemmed and cut into ½-inch pieces (6 cups)" },
        { quantity: "2 tablespoons", item: "chopped fresh cilantro" },
        
        // Fish ingredients
        { quantity: "3", item: "scallions, minced (¼ cup)" },
        { quantity: "8 cloves", item: "garlic, minced" },
        { quantity: "1 teaspoon", item: "table salt" },
        { quantity: "1 teaspoon", item: "onion powder" },
        { quantity: "½ teaspoon", item: "brown sugar" },
        { quantity: "¼ teaspoon", item: "pepper" },
        { quantity: "¼ teaspoon", item: "ground allspice" },
        { quantity: "¼ teaspoon", item: "ground nutmeg" },
        { quantity: "¼ teaspoon", item: "cayenne" },
        { quantity: "4 (1- to 1¼-pound)", item: "whole snapper, scaled, gutted, fins snipped off with scissors" },
        { quantity: "¼ cup", item: "cane vinegar" },
        { quantity: "2 tablespoons", item: "unsalted butter, cut into 8 pieces" },
        { quantity: "to taste", item: "lime wedges" },
      ],
      steps: `
### Before You Begin
Callaloo, also called green leaf amaranth, can be found at Caribbean markets and farmers' markets. If you can't find it, substitute red leaf amaranth, also called Chinese spinach, or collard greens; the latter will taste slightly bitter. You can substitute mild-tasting cane vinegar, sold in Caribbean and Asian markets, with white vinegar; Scotch bonnet chile with habanero; and red snapper with branzino, grouper, or black sea bass.

### Instructions
1. **For the Stuffing:** Melt butter in 12-inch nonstick or carbon-steel skillet over medium-high heat. Add scallions, garlic, thyme, ginger, and Scotch bonnet and cook, stirring frequently, until fragrant, 1 to 2 minutes. Add okra, salt, pepper, and allspice and cook, stirring constantly, for 1 minute. Add callaloo and cook, stirring frequently, until callaloo has wilted and okra is slightly softened, 4 to 6 minutes. Transfer mixture to bowl, stir in cilantro, and season with salt and pepper to taste. Set aside to cool. (Stuffing can be made up to 24 hours in advance and refrigerated.)

2. **For the Fish:** Combine scallions, garlic, salt, onion powder, brown sugar, pepper, allspice, nutmeg, and cayenne in bowl. Rinse snapper under cold running water and pat dry inside and out with paper towels. Using sharp knife, make three ¼-inch-deep slashes 1 inch apart along both sides of each fish. Working with 1 fish at a time, rub inside and outside with 1 tablespoon vinegar. Massage one-quarter of scallion-spice mixture into skin, slashes, and cavity of fish. Open cavity and fill with one-quarter of stuffing.

3. Cut four 18 by 12-inch pieces of foil. Spray center of foil with vegetable oil spray. Place 1 stuffed fish in center of each piece of foil. Top each fish with 2 pieces of butter. Bring long edges of foil together and crimp to seal tightly. Roll up ends to form sealed packet. (Packets can be assembled 24 hours in advance and refrigerated.)

4. **For a Charcoal Grill:** Open bottom vent completely. Light large chimney starter filled with charcoal briquettes (6 quarts). When top coals are partially covered with ash, pour evenly over grill. Set cooking grate in place, cover, and open lid vent completely. Heat grill until hot, about 5 minutes.  
**For a Gas Grill:** Turn all burners to high; cover; and heat grill until hot, about 15 minutes. Turn all burners to medium-high.

5. Clean and oil cooking grate. Place foil packets on grill, seam side up, perpendicular to grate bars. Cook, covered, for 8 minutes. Using 2 thin spatulas, flip foil packets over, then cover grill and continue to cook until thermometer inserted (through foil) into thickest part of fish registers 140 degrees, 4 to 8 minutes longer.

6. Transfer foil packets to rimmed baking sheet, flipping each packet so it is seam side up. Let fish rest in packets for 5 minutes. Serve fish in individual packets, or carefully open packets and slide fish onto plates. Serve with lime wedges.
`,
      servings: 2,
    },
    3: {
      title: 'Jamaican Stew Peas with Spinners',
      image: '/images/peaStew.webp',
      tags: ['Pork', 'Stews'],
      intro: 'Beneath its world-renowned jerked meats and festive seafood dishes lies the beating heart of Jamaican cuisine: stew peas.',
      ingredients: [{ quantity: "1 pound (about 2 cups)", item: "dried small red beans, picked over and rinsed" },
        { quantity: "6 cups plus 3 tablespoons", item: "water, divided" },
        { quantity: "4 sprigs", item: "fresh thyme, plus 1 tablespoon chopped" },
        { quantity: "1", item: "Scotch bonnet chile, pierced once with tip of paring knife" },
        { quantity: "1", item: "bay leaf" },
        { quantity: "1 teaspoon", item: "whole allspice berries" },
        { quantity: "1 tablespoon", item: "unrefined coconut oil" },
        { quantity: "1", item: "onion, chopped" },
        { quantity: "1", item: "green bell pepper, stemmed, seeded, and chopped" },
        { quantity: "1 large", item: "celery rib, chopped (¾ cup)" },
        { quantity: "3 tablespoons", item: "minced garlic" },
        { quantity: "2 teaspoons", item: "garlic powder" },
        { quantity: "1¼ teaspoons", item: "table salt, divided" },
        { quantity: "½ teaspoon", item: "pepper" },
        { quantity: "2 (12-ounce)", item: "smoked ham hock" },
        { quantity: "2 cups", item: "chicken broth" },
        { quantity: "1 (14-ounce)", item: "can coconut milk" },
        { quantity: "½ cup", item: "all-purpose flour" },
        { quantity: "6", item: "scallions, chopped" },],
      steps: `
### Before You Begin
Small, dark-red dried beans (usually labeled “small red beans”) are similar to the dried red peas used in Jamaica and have a creamy texture when cooked, but you can substitute dried red kidney beans, if desired. If you don't have any coconut oil on hand, you can substitute vegetable oil. If you can't find a Scotch bonnet chile, use a habanero. For the best results, use full-fat coconut milk. Serve with steamed long-grain white rice.

### Instructions
1. Combine beans and 6 cups water in large container and soak at room temperature for at least 8 hours or up to 24 hours.

2. Bundle thyme sprigs, Scotch bonnet, bay leaf, and allspice in cheesecloth; secure with kitchen twine; and set aside. Heat oil in large Dutch oven over medium heat until shimmering. Add onion, bell pepper, celery, garlic, garlic powder, ½ teaspoon salt, and pepper and cook, stirring occasionally, until onion is translucent, 6 to 8 minutes.

3. Add beans and their soaking liquid, ham hocks, chicken broth, cheesecloth bundle, and ½ teaspoon salt. Increase heat to high and bring to boil. Lower heat to maintain a vigorous simmer. Cook uncovered, stirring occasionally, until beans start to soften and liquid is slightly reduced, about 1½ hours. Stir in coconut milk and continue to cook until beans are completely soft (it's OK if some skins crack) and sauce thickens, about 30 minutes longer.

4. While stew simmers, combine flour and remaining ¼ teaspoon salt in bowl. Make well in mixture. Gradually add remaining 3 tablespoons water, stirring until shaggy mass forms. Knead in bowl until dough clears sides of bowl and forms tight ball (if dough seems too dry to shape, add up to 2 teaspoons water, ½ teaspoon at a time). Pinch off about 1 teaspoon dough and roll between your palms to form 3-inch-long dumpling with tapered ends. Transfer to plate and repeat with remaining dough (you should have 14 to 16 dumplings).

5. Taste stew; adjust spiciness, if desired, by pressing cheesecloth bundle against side of pot with back of spoon to release juice of Scotch bonnet. Discard bundle and transfer ham hocks to plate to cool slightly. Gently drop dumplings into stew. Simmer, without stirring, until dumplings are set, about 5 minutes. While dumplings cook, debone ham hocks and cut meat into ½-inch pieces (you'll have ½ to ⅔ cup meat); discard bones, skin, and fat. Stir meat, scallions, and chopped thyme into stew. Season with salt and pepper to taste. Simmer until flavors have melded and scallions have softened slightly, 10 to 15 minutes. Serve.
`,
      servings: 8,
    },
  };
  

  const recipe = propRecipe || recipes[Number(id)];

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <span key={index} className="recipe-tag">{tag}</span>
        ))}
      </div>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <div className="recipe-intro">{recipe.intro}</div>
        <div className="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {typeof ingredient === 'string'
                  ? ingredient
                  : `${ingredient.quantity} ${ingredient.item}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="recipe-directions">
        <h2>Directions</h2>
        <p>{recipe.steps}</p>
        <div className="recipe-extra">
          <span>Servings: {recipe.servings}</span>
          <button className="print-button">Print Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
