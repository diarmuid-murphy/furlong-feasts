const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	name: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;