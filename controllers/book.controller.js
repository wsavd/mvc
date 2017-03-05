var Book = require('../models/book.model');

//all books
module.exports.book_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Book list');
};

//page for a specific book
module.exports.book_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

//book create form on GET
module.exports.book_create_get = function(req, res, next) {
    res.send('form');
};
//book create on POST
module.exports.book_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

//book update
module.exports.book_update_put = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BOOK update PUT: ');
};

module.exports.book_delete_delete = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BOOK update PUT: ' + req.params.id);
}
