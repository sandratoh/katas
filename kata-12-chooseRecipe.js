const ingredientCheck = (bakery, ingredients) => {
  for (let ingredient of ingredients) {
    if (bakery.includes(ingredient)) {
      return ingredient;
    }
  }
  return null;
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for (let recipe of recipes) {
    const a = ingredientCheck(bakeryA, recipe.ingredients);
    const b = ingredientCheck(bakeryB, recipe.ingredients);

    if (a && b && a !== b) {
      return recipe.name;
    }
  }
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
