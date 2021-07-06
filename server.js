const express = require("express")
const cors = require("cors")
const { Tilder } = require("./model")
const server = express()

server.use(cors())
server.use(express.json({}))
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
    console.log("Getting the Tilders");
    Tilder.find({}, (err, tilder)=>{
        if (err){
            console.log("There was an error getting the Tilders")
            res.status(500).send(
                JSON.stringify({message:"Unable to grab the tilders",
                error:err})
            );

            return;
        }
        res.status(200).json(tilder);
    })

})
//GET /thread/:id

//POST /thread

//DELETE /thread:id

//POST /post

//DELETE /post/:thread_id/:post_id