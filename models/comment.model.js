var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = mongoose.Schema({
  text: String,

  created_by: { type: Schema.ObjectId, ref: 'User' },
  card: { type: Schema.ObjectId, ref: 'Card' },
  
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports =  mongoose.model('Comment', CommentSchema);