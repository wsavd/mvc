var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;