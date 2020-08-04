const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// add images, user comments
const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;