const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    ticker: { type: String, required: true },
    content: { type: String }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;