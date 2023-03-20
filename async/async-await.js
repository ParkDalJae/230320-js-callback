import fs from "fs"
import http from "http"

let tempArray =[]
async function asdf(){
    for(let i=0,a=0,c=0;i<100;i++,a++,c++){
        await new Promise((resolve,reject)=>{
            let tempTempArray=["i"+i,"a"+a,"c"+c]
            setTimeout(()=>{
            console.log(`${tempTempArray}`)
            tempArray.push(tempTempArray)
            resolve()
        },1)
        })
    }
    await new Promise((resolve,reject)=>{
        console.log(tempArray)
        resolve();
    })
    await new Promise((resolve,reject)=>{
        console.log("끝")
        resolve();
    })
}

asdf()


// await new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`2번`)
//         resolve()
//     },100)
// })