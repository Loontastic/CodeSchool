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
    Thread.find({}, (err, myThread)=>{
        Thread.forEach(myThread => {
            Thread.findByIdAndDelete(myThread._id, (err, thread)=>{
            });
        })
    })
}
function createThreads(){
    
}
function createPosts(){
    //code
}
//pull posts from specific thread
