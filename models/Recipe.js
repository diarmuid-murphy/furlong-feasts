const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// add images, user comments
const recipeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	instructions: {
		type: String,
		required: true
	},
	additionalNotes: String,
	year: Number,
	originalAuthor: {
		type: String,
		required: true
	},
	postedBy: {
		type: String,
		required: true
	}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;