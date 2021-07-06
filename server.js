const express = require("express")
const cors = require("cors")
const { Thread, Post} = require("./model")
const server = express()

server.use(cors())
server.use(express.json({}))
server.use(express.static('static'))
module.exports = server;

server.get((req, res, next)=>{
    console.log(
    "Time", 
    Date.now(), 
    " - Method: ", 
    req.method, 
    " - Path: ",
    req.originalUrl, 
    " - Body: ", 
    req.body);
    next();
})
//GET /thread
server.get("/thread", (req, res)=>{
    res.setHeader("ContentType", "application/json");
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
        res.status(200).json(thread);
    });
});
//GET /thread/:id
server.get("/thread/:id", (req, res) =>{
    res.setHeader("Content-Type", "application/json");
    console.log(`Getting thread with id ${req.params.id}`)
    Thread.findById(req.params.id, (err, thread)=>{
        if (err){
            console.log(`There was an error`);
            res.status(500).send(
                JSON.stringify({
                    message:`Unable to find the thread with id ${req.params.id}`,
                    error:err,
                })
            );
            return;
        }
        else if(!thread){
            console.log(`There was an error`);
            res.status(404).send(
                JSON.stringify({
                    message:`Unable to find thread with id ${req.params.id}`,
                    error:`That thread doesn't exist!`,
                })
            );
            return;
        }
        console.log("Holy Smoks")
        res.status(200).json(thread);
    });
})
//POST /thread
server.post("/thread", (req,res)=>{
    res.setHeader("Content-Type", "application/json")
    console.log(`creating a tilder with body ${req.body}`)
    let newPost = {
        name: req.body.name || "",
        description: req.body.description ||"",
        author: req.body.author || "",
        category: req.body.category ||"all",
        posts: [],
    }

    Thread.create(newPost, (err,thread)=>{
        if (err){
            console.log(`Couldn't create a thread with body ${req.body}`);
            res.status.send(JSON.stringify({
                message:`Unable to create the thread with body ${res.body}`,
                error:err
            })
            );
        };
        console.log("NO ERROR")
        res.status(201).json(thread)
    })
});
//DELETE /thread:id
server.delete("/thread/:id", (req,res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`deleting a thread with id ${req.params.id}`);
    Thread.findByIdAndDelete(req.params.id, (err,thread)=>{
        if (err){
            console.log(`There was an error`);
            res.status(500).send(
                JSON.stringify({
                    message:`Unable to delete the thread with id ${req.params.id}`,
                    error:err,
                })
            );
            return;
        }
        else if(!thread){
            console.log(`There was an error`);
            res.status(404).send(
                JSON.stringify({
                    message:`Unable to delete thread with id ${req.params.id}`,
                    error:`That thread doesn't exist!`,
                })
            );
            return;
        }
        res.status(200).json(thread)
    });
})
//POST /post
server.post("/post", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`Creating a postwith body ${req.body}`);
    let newPost = {
        author: req.body.author || "",
        body: req.body.body || "",
        thread_id: req.body.thread_id || "",
    }
    Thread.findByIdAndUpdate(req.body.thread_id, 
        {
            $push: {
                posts: newPost
            },
        },
        {
            new:true,
        },
        (err, thread)=>{
            console.log("GIGA")
            if (err){
                res.status(500).send(
                    JSON.stringify({
                        message:`Unable to post to specified thread `,
                        error:`That thread doesn't exist!`,
                    })
                );
                return;
            }
            else if (!thread){
                res.status(404).send(
                    JSON.stringify({
                        message:`Unable to create post with specified thread`,
                        error:`The specified thread doesn't exist!`,
                    })
                );
                return;
            }
            res.status(200).json(thread);
    });
})
//DELETE /post/:thread_id/:post_id
server.delete("/post/:thread_id/:post_id", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`My deleted post's thread's id is ${req.params.thread_id} 
    and the post's id is ${req.params.post_id}`);
    Thread.findByIdAndUpdate(req.params.thread_id,{
        $pull: {
            posts:{
                _id:req.params.post_id,
            },
        },
    }, 
    {
        new:true,
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
        else if (!thread){
            res.status(404).send(
                JSON.stringify({
                    message:`Unable to create post with specified thread`,
                    error:`The specified thread doesn't exist!`,
                })
            );
            return;
        }
        res.status(200).json(thread)
    }
    )
})