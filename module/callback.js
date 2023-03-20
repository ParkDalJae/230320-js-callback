// function six(){                               //첫번째 함수
//     return 1;
// }
// function six(number){                         //두번째 함수(매개변수 추가)
//     if(typeof(number)==="number"){
//         return number +1;
//     }else{
//         console.error("이 매개변수는 숫자여야 동작합니다.")
//     }
// } 
// function six(number, append){                            //매개변수 2개
//     if(typeof(number)==="number" && typeof(append)==="number"){
//         return number + append;
//     }else{
//         console.error("이 매개변수는 숫자여야 동작합니다.")
//     }
// }
function six(number, append){                            //매개변수 2개, 타입체커 지움
    return number + append;
}
function seven(number, append){                          //매개변수 2개, 뺄셈
    return number - append
}

//a, b는 상관 없지만 맨 마지막 매개변수는 callback이라고 붙여준다(암묵적인 룰)
function eight(number, append, callback){
    let a = number +1;
    let b = append +2
    return callback(a,b)        
}

// const a = six(1); //데이터가 변한다.
// console.log(a)

console.log(eight(5,7,function(a,b){
    return a+b;
})
)
