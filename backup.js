var fs = require("fs");
const {Post, Thread} = require('./model')
//pull all threads
function toGrabThread(index){
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
        // res.status(200).json(thread);C
        let filePath = "backupNumber" + index +".txt";
        fs.writeFile(filePath,JSON.stringify(thread), (err) => {
            if (err) console.log(err);
        });
    });
    //masterList.push(thread)
}

function deleteDatabase(callback, index){
    Thread.find({}, (err, myThread)=>{
        myThread.forEach(mySingleThread => {
            Thread.findByIdAndDelete(mySingleThread._id, (err, thread)=>{
            });
        })
        callback(index)
    })
}
function createThreads(index){
    let filePath = "backupNumber" + index +".txt";
    fs.readFile(filePath, "utf-8", (err, content) =>{
        var myData = JSON.parse(content);
        for (const index in myData){
            if (!myData[index].thread_id);
                Thread.create(myData[index],(err,tilder)=>{});
        }
    });
}
//pull posts from specific thread

//exporting our functions
module.exports = {deleteDatabase, toGrabThread, createThreads} ;
