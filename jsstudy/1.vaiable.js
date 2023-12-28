var v1;
let l1;
const c1=null;
console.log(v1);
console.log(l1);
console.log(c1);

v1=10;
l1='Hello';

console.log(v1);
console.log(l1);
console.log(c1);

let v2=1;
console.log(`${v2}의 타입은 ${typeof v2}`); //number

v2='hello';
console.log(`${v2}의 타입은 ${typeof v2}`); //string

v2=true;
console.log(`${v2}의 타입은... ${typeof v2}`); //boolean

//호이스팅hoisting : 변수나 함수를 선언하지 않아도 엔진이 해당 블럭 상단에 선언해 줌
//즉 실행하기전 선언문을 끌어올려줌
console.log(v6);
var v6; //근데 let은 호이스팅을 막아놨기에 안된다. var만 해당

hello();
function hello() {
    console.log("Hello");
}

/*변수의 scope : 변수를 사용할 수 있는 범위(영역)
전역 global 함수 fuction 블럭block 
함수, 블록스코프를 지역local 스코프라 부르기도 한다
함수 fuction() {
    여기 안에서 선언한 애들
}

블록 {
    여기서 선언한 애들 : 단 var의 경우 전역변수global이라는 예외
}*/