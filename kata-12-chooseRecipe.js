const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  let result;

  bakeryA.forEach(a => {
    recipes.forEach(recipe => {
      let ingredientA;
      if (recipe.ingredients.includes(a)) {
        ingredientA = a;
      }

      bakeryB.forEach(b => {
        if (recipe.ingredients.includes(b) && b !== ingredientA) {
          result = recipe.name;
        }
      });
    });
  });

  return result;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
// Expected Output: Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Expected Output: Nima's Famous Dijon Raisins
