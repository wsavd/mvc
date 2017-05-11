var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
  name: String,
  //posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
  
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema);