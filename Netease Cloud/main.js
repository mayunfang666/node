const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer((request,response)=>{
  if(request.url=="/favicon.ico"){
    return;
  }
  response.writeHead(200,{
    'Content-Type':getType(request.url)
  })
  let pathname='';
  if(request.url=="/"){
    pathname=__dirname+"/index.html";
  }else{
    pathname=__dirname+request.url;
  }
  fs.readFile(pathname,(err,data)=>{
    response.end(data);
  })

}).listen(8080);
function getType(url){
  var str="";
  str=path.extname(url);
  switch(str){
    case "":
    return 'text/html';
    break;
    case '.css':
    return 'text/css';
    break;
    case '.js':
    return 'application/javascript';
  }
}