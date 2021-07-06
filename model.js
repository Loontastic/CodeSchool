const mongoose = require("mongoose");

const threadSchema = mongoose.Schema({
    name: String,
    description: String,
    done: Boolean,
    deadline: Date
});

const Thread = mongoose.model("Thread", threadSchema)

let store = {};

module.exports = {
    Thread,
    store,
};

