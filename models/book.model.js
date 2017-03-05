var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	title: {
		type: String
	},
	author: {
        type: String
    },
	cover: {
		type: String
	},
	genre: {
		type: String
	},
	releaseDate: {
		type: Date
	}
});

var Book = module.exports = mongoose.model('Book', BookSchema);