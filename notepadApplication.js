import http from 'http'
import fs, { write } from 'fs'


const filePath = "./nodejs-fs-prac-noteapd/"
const filenameExtension = ".txt"
const notepadSub = ""
const notepadContent = ""
function bodyAffter(inputAffterSub,inputAffterContent){
    return`
        <h1>제목 : ${inputAffterSub}</h1>
        <h1>내용 : ${inputAffterContent}</h1>
    `
}
function bodyTag(){
    return `
        <form action="/trans" method="get">
        <h3>제목</h1>
        <input type="text" name="sub">
        <h3>내용</h1>
        <textarea name="content" cols="30" rows="10"></textarea>
        <br><br><br>
        <input type="submit" value="저장">
        <h3>저장위치 : ${filePath}</h1>
        <h3>확장자 :  ${filenameExtension}</h1>
        </form>
    `
}
function htmlPage(bodyTagFunction) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    ${bodyTagFunction}
    </body>
    </html>
`
} 


const notepadServer = http.createServer(function(req,res){
    if(req.url==="/"){ 
        res.writeHead(200, {'Content-Type': 'text/html'})
        console.log("---------------------")
        console.log(req.method)
        console.log(req.url)
        console.log("---------------------")
        let bodyMain = htmlPage(bodyTag())
        res.write(bodyMain)
        res.end()
    }
    if(req.url.startsWith('/trans')){
        console.log("전환되쓰요") //get방식 주소 쪼개기
        res.writeHead(200, {'Content-Type': 'text/html'})
        let urlQusSub = req.url.split("?")[1].split("&")[0].split("=")[1]
        let urlQusContent = req.url.split("?")[1].split("&")[1].split("=")[1]
        
        let bodyNameSection = htmlPage(bodyAffter(urlQusSub,urlQusContent) )
        res.write(bodyNameSection)
        res.end()
    }
})

notepadServer.listen(2080,function(err){
    if(err) {
        console.log("서버에러")
    }else{
        console.log("서버온")
    }
})