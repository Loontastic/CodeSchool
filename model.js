const mongoose = require("mongoose");


const postSchema = mongoose.Schema(
    {
    thread_id: {type: mongoose.Schema.Types.ObjectId, ref:"Thread"},
    author: String,
    body: String,
    },
    {timestamps:true}
)
const threadSchema = mongoose.Schema(
    {
    name: String,
    description: String,
    author: String,
    category: String,
    posts: [postSchema],
    },
    {timestamps: true}
);
const Thread = mongoose.model("Thread", threadSchema)
const Post = mongoose.model("Post", postSchema);
let store = {};

module.exports = {
    Thread,
    Post,
    store,
};

