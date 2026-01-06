const http=require("http");
const { hostname } = require("os");
const fs = require("fs");

const myServer=http.createServer((req, res) =>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`New Data Recieved on : ${Date.now()}: ${req.url} \n`;
    fs.appendFile("ServerLog.txt", log, (err, data)=>{
        switch(req.url){
            case '/':
                res.end("Hello from HomePage");
                break;
            case '/about':
                res.end("Hello from AboutPage");
                break;
            case '/contact':
                res.end("Hello from Contact Us Page");
                break;
            default:
                res.end("404 webpage not Found");
                
        }
        
    })
});


myServer.listen(5474,()=> console.log("Server is running on Port: 3000\n Host name is : Shabby.Sever-webApi") );