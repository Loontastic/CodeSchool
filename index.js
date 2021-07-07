const server = require("./server");
const persist = require("./persist");
const { toGrabThread, toGrabPosts } = require("./backup");


const port = process.argv[2]||process.env.PORT ||8080;

persist(()=>{
    server.listen(port, ()=>{
        console.log(`Code School 2021 Forum App Running on port ${port}`);
    })
})
masterList = []
i = 0
setInterval(function(){
    toGrabThread(masterList)
    toGrabPosts(masterList)
    i++
    console.log(i)
    console.log(masterList)
},2500)