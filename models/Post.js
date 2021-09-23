const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	FoodImg: {type: String, required: true},
	Date: {type: Date, default: Date.now},
	FoodTitle: {type: String, required: true},
	Description: {type: String, required: true},
	Ingredients: {type: String, required: true},
	Directions: {type: String, required: true},
	Category: {type: String, required: true}
}) 

const Post = mongoose.model('Post', postSchema)

module.exports = Post

