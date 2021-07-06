const mongoose = require("mongoose");

const threadSchema = mongoose.Schema({
    name: String,
    description: String,
    author: String,
    category: String,
    createdAt: Date,
    updatedAt: Date,
});
const postSchema = mongoose.Schema({
    name:String
})
const Thread = mongoose.model("Thread", threadSchema)

let store = {};

module.exports = {
    Thread,
    store,
};

