const server = require("./server");
const persist = require("./persist");
const { toGrabThread, deleteDatabase, createThreads } = require("./backup");


const port = process.argv[2]||process.env.PORT ||8080;

persist(()=>{
    server.listen(port, ()=>{
        console.log(`Code School 2021 Forum App Running on port ${port}`);
    })
})
i = 0
setInterval(function(){
    //toGrabThread(i)
    i++
    //deleteDatabase(createThreads, 7)
    console.log(i)
},10000)