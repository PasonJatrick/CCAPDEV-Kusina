const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost/KusinaDB';

mongoose.connect(dbURL);

const express = require('express');
const fileUpload = require('express-fileupload')
const path = require ('path')
const Comments = require('./models/Comments');
const Post = require('./models/Post');
const User = require('./models/User');
const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended:true}) );
app.use(express.static(`public`));
app.use(fileUpload());


const hbs = require('hbs');
app.set ('view engine', 'hbs');
hbs.registerPartials(__dirname + `/views/partials`);


app.get('/', async(req,res) => {
	const userpost = await Post.find({})
	res.render(__dirname + '\\' + 'index', {userpost});
})

app.get('/posts', async(req,res) => {
	const userpost = await Post.find({})
	res.render('posts', {userpost})
})

app.get('/createPost', function(req,res) {
	res.render('createPost')
})

app.get('/profile', function(req,res) {
	res.render('profile')
})
app.post('/create-user', function(req,res) {
	Post.create(req.body, (error,post) =>
	{
		res.redirect('/posts')
	})
})

app.post('/submit-post', function(req,res) {
	const {FoodImg} = req.files
	FoodImg.mv(path.resolve(__dirname, 'public/images', FoodImg.name), (error) => {
		Post.create(
		{
			FoodImg: '/images/' + FoodImg.name,
			...req.body	
		} , (error,post) => 
		{
			res.redirect('posts')
		})

	})
})

var port = 3000
var server = app.listen(port, function() { 
	console.log ('Node server is running on port ' + port)
})

