var User = require('../models/user.model');
var Comment = require('../models/comment.model');
var Post = require('../models/post.model');

module.exports.userCreate = function(req, res) {
    var user = new User();

  		user.name = req.body.name;
		//user.posts = req.body.postId;

  		user.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};

module.exports.commentCreate = function(req, res) {
    var comment = new Comment();

  		comment.text = req.body.text;//значение поля формы
		comment.created_by = req.body.userId;//req.user.id
		var query = {_id: [req.body.postId]};
		//console.log(query);
		
  		comment.save().then(function (results) {
			Post.update(query, { $push:{'comments': results._id},  }, {}).then(function(results) {
				res.json(results);
			})
        });
};
module.exports.postCreate = function(req, res) {
    var post = new Post();

  		post.title = req.body.title;
		post.created_by = req.body.userId;
		post.comments = req.body.commentId;

  		post.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};

module.exports.commentsByUser = function(req, res, next) {
    Post.find({}).populate({
		path: 'comments',
		model: 'Comment',
		select: 'text'
	}).exec(function(err, items) {
    	res.json(items);
  });
};
/*
Item.find({}).populate('comments.created_by').exec(function(err, items) {
    console.log(items[0].comments[0].created_by.name);
});*/

//module.exports.view = function(req, res, next) {
	//вывести все комментарии к посту с айдишником
	//Post.find({/*"_id" : "591385af5999ed1c48fec193"*/}).populate({
	//	path: 'comments',
	//	select: 'text'
	//}).exec(function(error, results) {
	//	res.json(results)
//});
	/*
	//все посты которые есть в базе
	Post.find({}).exec(function(error, results) {
		res.json(results)
});*/
	/*
	//развернет ссылку то бишь покажет еще и свойства по ссылке
	Post.find({}).populate({
		path: 'created_by'}).exec(function(error, results) {
		res.json(results)
});*/
	/*
	//развернет по ссылке только свойства name и _id
	Post.find({}).populate({
		path: 'created_by',
		select: 'name _id'}).exec(function(error, results) {// -_id исключить _id из выдачи
		res.json(results)
	});
	*/
//};