var express = require('express');
var router = express.Router();

// Require controller modules
var book_controller = require('../controllers/book.controller');

/// BOOK ROUTES ///
router.get('/books', book_controller.book_list);

router.get('/book/:id', book_controller.book_detail);

//form for create book
router.get('/books/create', book_controller.book_create_get);

// POST request for creating Book
router.post('/books/create', book_controller.book_create_post);

router.delete('book/:id', book_controller.book_delete_delete);

router.put('book/:id', book_controller.book_update_put);

module.exports = router;
