var fs = require("fs");
const {Post, Thread} = require('./model')
//pull all threads
function toGrabThread(list){
    //code
    console.log("Getting the Threads");
    Thread.find({}, (err, thread)=>{
        if (err){
            console.log("There was an error getting the Threads")
            res.status(500).send(
                JSON.stringify({message:"Unable to grab the threads",
                error:err})
            );
            return;
        }
        // res.status(200).json(thread);
        list.push(thread);
       
    });
    //masterList.push(thread)
}
function toGrabPosts(list){
    //code
    console.log("Getting the Posts");
    Post.find({}, (err, post)=>{
        if (err){
            console.log("There was an error getting the Posts")
            res.status(500).send(
                JSON.stringify({message:"Unable to grab the posts",
                error:err})
            );
            return;
        }
        // res.status(200).json(thread);
        list.push(post);
        
    });
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

//exporting our functions
module.exports = {toGrabPosts, toGrabThread} ;
