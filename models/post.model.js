var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Card
var PostSchema = new Schema({
    title: String,

    comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
    created_by: { type: Schema.ObjectId, ref: 'User' },//req.paramas.user

    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Post', PostSchema);