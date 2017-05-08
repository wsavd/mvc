var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index.controller')

router.post('/user', index_controller.userCreate);
//router.post('/comment', index_controller.commentCreate);
router.post('/post', index_controller.postCreate);

router.get('/view', index_controller.view);

module.exports = router;