import fs from 'fs'

let name = "Park DalJae"
// let date = new Date();
// let fileName = date.getSeconds()+name;
let year = "2023"
let month = "03"
let day = "20"
let fileName = year+month+day+"-"+name


fs.writeFileSync("./"+fileName +".txt",name)
fs.rm('./'+fileName+".txt",function(err){if(err)throw err})