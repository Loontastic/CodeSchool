const mongoose = require("mongoose");

const threadSchema = mongoose.Schema({
    name: String,
    description: String,
    author: String,
    category: String,
    posts: Array,
    createdAt: Date,
    updatedAt: Date,
});
const postSchema = mongoose.Schema({
    thread_id: String,
    author: String,
    body: String,
    createdAt: Date,
    updatedAt: Date,
})
const Thread = mongoose.model("Thread", threadSchema)
const Post = mongoose.model("Post", postSchema);
let store = {};

module.exports = {
    Thread,
    Post,
    store,
};

