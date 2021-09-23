const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	Date: {type: Date, default: Date.now},
	Rating: {type: Number, required: true}
}) 

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

