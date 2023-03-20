import fs, { existsSync } from 'fs'

let name = "ParkDalJae"
// let date = new Date();
// let fileName = date.getSeconds()+name;
let year = "2023"
let month = "03"
let day = "20"
let fileName = year+month+day+"-"+name


// ? 작성, 없으면 생성 후 작성. 추가작성 O
// fs.writeFileSync("./"+fileName +".txt",name)               
// ? 작성, 없으면 생성 후 작성. 추가작성 O
fs.appendFileSync("./"+fileName +".txt","이어서쓰기\n")        
// ? 제거
// fs.rm('./'+fileName+".txt",function(err){if(err)throw err})
// ? 파일 확인
if(existsSync('./'+fileName+".txt")){   console.log('있어요')}
// ? 디렉토리 확인
console.log(fs.readdirSync("./",))
