
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'Creamy Shrimp Scampi with Half-and-Half', 
        meal_type: 'Seafood',
        img:'1010', 
        ingredients:' 1/2 (16 ounce) package linguine pasta;2 teaspoons lemon juice, or to taste; 4 tablespoons butter;1/2 cup half-and-half;1/4 cup finely shredded Parmesan cheese; 2 cloves garlic, minced;1 pound jumbo shrimp, peeled and deveined; 2 tablespoons Pinot Grigio wine        ',
         instructions:'Bring a large pot of lightly salted water to a boil. Cook linguine at a boil until tender yet firm to the bite, about 8 minutes. While pasta cooks, melt 2 tablespoons butter in a skillet over medium heat. Add garlic and cook until fragrant and lightly browned, about 1 minute. Add shrimp and cook until tails start curling in, about 2 minutes per side. Add remaining butter, Pinot Grigio, lemon juice, half-and-half, and Parmesan cheese. Stir to incorporate. Drain linguine and divide noodles between 2 bowls. Serve shrimp mixture on top and garnish with parsley.  ',
          user_id: 1},
        {id: 2, 
          title: 'Pork Chops in Garlic Mushroom Sauce',
           meal_type: 'Entree',
            img:'1111',
             ingredients:' 2 pounds boneless pork chops; 4 cloves garlic, minced; 1/2 teaspoon paprika; 1 teaspoon Dijon mustard;1 pinch kosher salt and ground black pepper to taste; 2 tablespoons all-purpose flour; 1/4 cup butter, divided;2 cups beef broth;1 (8 ounce) package sliced fresh mushrooms'
             , instructions:'Season both sides of pork chops with paprika, salt, and pepper.Heat a large skillet over medium-high heat; add 2 tablespoons butter. Sear pork chops until golden brown and no longer pink in the center, 2 to 4 minutes per side. Remove pork chops from the skillet and set aside. Melt remaining butter in the same skillet over medium-high heat. Add mushrooms and cook until golden and excess moisture evaporates, about 5 minutes. Add garlic and mustard; cook until garlic is fragrant, about 1 minute. Add flour to the skillet, stirring to remove any lumps. Slowly add beef broth, whisking until incorporated. Season with salt and pepper. Reduce heat to medium and simmer, stirring often, until sauce thickens, about 5 minutes. Check for seasoning again. Return pork chops to the skillet and cook until heated through, about 1 minute. Serve hot. ',
              user_id: 1},
        {id: 3,
        title: 'Super Duper Slow Cooker Beef Stroganoff', 
        meal_type: 'Entree',
        img:'0001',
        ingredients:' 1 1/2 pounds cubed beef stew meat; 1 cube beef bouillon; salt and ground black pepper to taste; 1/2 cup red wine; 1 onion, chopped;1 (10.75 ounce) can condensed cream of mushroom soup; 1/4 cup water;1 tablespoon cornstarch; 2 cloves garlic, minced; 2 cloves garlic, minced;1 (8 ounce) package sliced fresh mushrooms; 4 ounces cream cheese; 1 tablespoon Worcestershire sauce; 1/2 cup chopped fresh parsley;',
        instructions:'Spread beef stew meat into bottom of slow cooker crock; season with salt and pepper. Layer onion over the beef. Pour mushroom soup and water over the beef; add chives, garlic, Worcestershire sauce, and beef bouillon. Whisk red wine, cornstarch, and flour together in a small bowl; pour over the mixture in the slow cooker. Cook on Low for 6 to 7 hours. Stir sour cream, mushrooms, cream cheese, and parsley into the beef mixture; continue cooking for 1 hour more. ',
         user_id: 1},
        {id: 4, 
        title: 'Asian Lettuce Wraps', 
        meal_type: 'Appetizer', 
        img:'1010',
         ingredients:' 16 Boston Bibb or butter lettuce leaves;1 tablespoon rice wine vinegar; 1 pound lean ground beef; 2 teaspoons minced pickled ginger; 1 tablespoon cooking oil; 1 large onion, chopped;1 (8 ounce) can water chestnuts, drained and finely chopped; 1/4 cup hoisin sauce; 1 bunch green onions, chopped; 2 cloves fresh garlic, minced; 2 teaspoons Asian (dark) sesame oil;1 tablespoon soy sauce',
          instructions:'Rinse whole lettuce leaves and pat dry, being careful not tear them. Set aside.Heat a large skillet over medium-high heat. Cook and stir beef and cooking oil in the hot skillet until browned and crumbly, 5 to 7 minutes. Drain and discard grease; transfer beef to a bowl. Cook and stir onion in the same skillet used for beef until slightly tender, 5 to 10 minutes. Stir hoisin sauce, garlic, soy sauce, vinegar, ginger, and chile pepper sauce into onions. Add water chestnuts, green onions, sesame oil, and cooked beef; cook and stir until the onions just begin to wilt, about 2 minutes. Arrange lettuce leaves around the outer edge of a large serving platter and pile meat mixture in the center.  ',
           user_id: 1}
      ]);
    });
};
