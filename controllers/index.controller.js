var User = require('../models/user.model');
//var Comment = require('../models/comment.model');
var Post = require('../models/post.model');

module.exports.userCreate = function(req, res) {
    var user = new User();

  		user.name = req.body.name;
		user.posts = req.body.postId;

  		user.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};
/*
module.exports.commentCreate = function(req, res) {
    var comment = new Comment();

  		comment.text = req.body.text;
		comment.created_by = req.body.userId;

  		comment.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};*/
module.exports.postCreate = function(req, res) {
    var post = new Post();

  		post.title = req.body.title;

  		post.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};
/*
module.exports.commentsByUser = function(req, res, next) {
    Post.find({}).populate('comments.created_by').exec(function(err, items) {
    console.log(items[0].comments[0].created_by.name);
  });
};*/
/*
Item.find({}).populate('comments.created_by').exec(function(err, items) {
    console.log(items[0].comments[0].created_by.name);
});*/

module.exports.view = function(req, res, next) {
	User.find({name: "mr robot"}).populate('posts').exec(function(error, author) {
		res.json(author);
  // `author.posts` is an array of `BlogPost` documents
});
}