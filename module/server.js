// const http = require('http') //CommonJS방식이라 작동X
import http from 'http';
console.dir(http)
const server = http.createServer(function(req,res){
    
    let dataContent = "안녕하세요"
    let body = ""
    body += "<!DOCTYPE html>"
    body += "<html>"
    body += "<head>"
    body += "<title>Node.js</title>"
    body += "</head>"
    body += "<body>"
    body += "<h1>Hello World</h1>"
    body += `${dataContent}`
    body += "</body>"
    body += "</html>"
    
    res.statusCode  = 200;
    res.setHeader('Content-Type','text/html')
    res.end('hello world!')
    
});

