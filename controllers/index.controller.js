var User = require('../models/user.model');
var Comment = require('../models/comment.model');
var Card = require('../models/card.model');

//возвращает созданную запись
module.exports.userCreate = function(req, res) {
    var user = new User();

  		user.name = req.body.name;
		//user.Cards = req.body.CardId;

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
		
		comment.card = req.body.cardId;
  		comment.text = req.body.text;//значение поля формы
		comment.created_by = req.body.userId;//req.user.id
		//var query = {_id: [req.body.CardId]};
		//console.log(query);
		
  		comment.save().then(function (saved) {
			Card.findByIdAndUpdate(req.body.cardId, { $push:{'comments': saved._id},  }).then(function(results) {
				res.json({
					postData: comment,
					results
				});
			})
        });
};
//возвращает созданную запись
module.exports.cardCreate = function(req, res) {
    var card = new Card();

  		card.title = req.body.title;
		card.created_by = req.body.userId;

  		card.save(function(err, results) {
    	if(err) {
      	res.send('error saving book');
    	} else {
      	res.json(results)
          };
        });
};
//вывести 
module.exports.commentsByUser = function(req, res, next) {
    Card.find({}).populate({
		path: 'comments',
		select: '-_id -card',
		populate: {
			path: 'created_by',
			select: '-_id'
		}
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
	//Card.find({/*"_id" : "591385af5999ed1c48fec193"*/}).populate({
	//	path: 'comments',
	//	select: 'text'
	//}).exec(function(error, results) {
	//	res.json(results)
//});
	/*
	//все посты которые есть в базе
	Card.find({}).exec(function(error, results) {
		res.json(results)
});*/
	/*
	//развернет ссылку то бишь покажет еще и свойства по ссылке
	Card.find({}).populate({
		path: 'created_by'}).exec(function(error, results) {
		res.json(results)
});*/
	/*
	//развернет по ссылке только свойства name и _id
	Card.find({}).populate({
		path: 'created_by',
		select: 'name _id'}).exec(function(error, results) {// -_id исключить _id из выдачи
		res.json(results)
	});
	*/
//};