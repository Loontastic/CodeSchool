const express = require("express")
const cors = require("cors")
const { Thread } = require("./model")
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
    res.json({});
})
//POST /thread
server.post("/thread", (req,res)=>{
    res.setHeader("Content-Type", "application/json")
    console.log(`creating a tilder with body ${req.body}`)
    res.json({});
});
//DELETE /thread:id
server.delete("/thread/:id", (req,res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`deleting a thread with id ${req.paramas.id}`);
    res.json({});
})
//POST /post
server.post("/post", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`Creating a postwith body ${req.body}`);
    res.json({});

})
//DELETE /post/:thread_id/:post_id
server.post("/post/:thread_id/:post_id", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    console.log(`My deleted post's thread's id is ${req.params.thread_id} 
    and the post's id is ${res.params.post_id}`);
    res.json({});
})