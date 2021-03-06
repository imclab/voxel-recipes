
var craftingrecipes = require('craftingrecipes');

module.exports = function(game, opts) {
  return new RecipesPlugin(game, opts);
};

function RecipesPlugin(game, opts) {
  this.list = new craftingrecipes.RecipeList();
  this.thesaurus = new craftingrecipes.CraftingThesaurus();
}

RecipesPlugin.prototype.register = function(recipe) {
  return this.list.register(recipe);
};

RecipesPlugin.prototype.registerAmorphous = function(ingredients, result) {
  return this.register(new craftingrecipes.AmorphousRecipe(ingredients, result));
};

RecipesPlugin.prototype.registerPositional = function(ingredients, result) {
  return this.register(new craftingrecipes.PositionalRecipe(ingredients, result));
};

RecipesPlugin.prototype.find = function(inventory) {
  return this.list.find(inventory);
};

RecipesPlugin.prototype.craft = function(inventory) {
  return this.list.craft(inventory);
};

