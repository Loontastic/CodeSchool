const server = require("./server");
const persist = require("./persist");

// define a port
const port = process.argv[2] || process.env.PORT || 8080;

persist(()=>{
    server.listen(port, ()=>{
        // console log for server startup
        console.log(`Code School 2021 Forum App Running on port ${port}`);
    })
})