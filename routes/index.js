var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index.controller')

router.post('/user', index_controller.userCreate);
router.post('/com', index_controller.commentCreate);
router.post('/card', index_controller.cardCreate);

router.get('/views', index_controller.commentsByUser);

module.exports = router;