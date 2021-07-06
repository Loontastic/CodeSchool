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
    console.log()
})
//POST /post

//DELETE /post/:thread_id/:post_id