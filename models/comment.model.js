var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = mongoose.Schema({
  text: String,

  created_by: { type: Schema.ObjectId, ref: 'User' },
  post: { type: Schema.ObjectId, ref: 'Post' },
  
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;