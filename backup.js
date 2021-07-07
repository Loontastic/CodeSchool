var fs = require("fs");
const {Post, Thread} = require('./model')
//pull all threads
masterList = []
function toGrabThread(){
    //code
    //masterList.push(thread)
}
function toGrabPosts(){
    //code
    //masterList.push(post)
}
function deleteDatabase(){
    Tilder.find({}, (err, tilder)=>{
        tilder.forEach(mytilder => {
            Tilder.findByIdAndDelete(mytilder._id, (err, tilder)=>{
            });
        })
        callback(filePath);
    })
}
function createThreads(){
    //code
}
function createPosts(){
    //code
}
//pull posts from specific thread
