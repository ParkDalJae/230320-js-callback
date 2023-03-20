function one(){
    return 1;
}

function two (){
    return "1";
}

// two() === "1"; //true

//보통 앞에 is가 붙어있으면 리턴이 boolean일 확률이 높음
function isThree(){     
    return true;
}

//four라는 함수는 객체 외에는 쓸 수 없다.
//까보지 않는다면 보이지 않지 때문에, 디버거에 의존해야 한다,
//강사님 曰 : 누가 어떤 코드를 가져와도, 일단 return만 먼저 본다.
//return만 생각하면 거의 대부분의 함수를 쓸 수 있다.
function four(){
    return {
        a: 1,
        b: '2',
        c: true,
    }
}
//실행만 하는 익스큐션 펑션
//동작만을 위한 함수가 있다.
//대표적인 예가 for문. return이 없음. 실행함수라고 함.
//DOM API의 대부분은 리턴이 없음
//addEventlistener : 리턴이 없음. 우리가 직접 만들어줘야 함.
function five(){ //C언어에서는 return void 라고한다.
    let a = 1+1;
}
