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
<<<<<<< HEAD
       
=======
>>>>>>> ae3b1c4f313556cd8d49e62da69ee7b40e57c2f4
    });
    //masterList.push(thread)
}
function toGrabPosts(list){
    //code
    console.log(`Grabbing posts`);
    Thread.find(req.params.thread_id,{
        $pull: {
            posts:{
                _id:req.params.post_id,
            },
        },
    }, 
    (err,thread)=>{
        if (err){
            res.status(500).send(
                JSON.stringify({
                    message:`Unable to post to specified thread `,
                    error:`That thread doesn't exist!`,
                })
            );
            return;
        }
<<<<<<< HEAD
        // res.status(200).json(thread);
        list.push(post);
        
=======
        else if (!thread){
            res.status(404).send(
                JSON.stringify({
                    message:`Unable to create post with specified thread`,
                    error:`The specified thread doesn't exist!`,
                })
            );
            return;
        }
        let post;
        thread.posts.forEach((e) =>{
            if (e._id == req.params.post_id){
                post = e;
            }
        });
        if (!post){
            res.status(404).json({
                message: "Could not find post",
                error:err
            });
        }
        console.log(post);
        list.push(post);
>>>>>>> ae3b1c4f313556cd8d49e62da69ee7b40e57c2f4
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
