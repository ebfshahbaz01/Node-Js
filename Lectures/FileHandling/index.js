const fs=require("fs");
const { SocketAddress, Socket, isIPv4 } = require("net");
//sync function
//fs.writeFileSync('./test.txt','Hey dear How are You this file created by node js');

//async func
//fs.writeFile('./text.txt','nodejs created',(err)=>{})

//sync Function
//const contact= fs.readFileSync("./contact.txt", "utf-8");
//console.log(contact);



//Async Function
// fs.readFile("./contact.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log("Error", err)
//     }
//     else{
//         console.log("Data is here:\n",res)
//     }
// })

// fs.writeFileSync("./server.txt","");
// fs.appendFileSync("./server.txt",`Hey There is The Data of Corresponding server\n\n\n ${SocketAddress}`);
// const server= fs.readFileSync("./server.txt", "utf-8");
// console.log(server);

