const x=1;//1.전역객체 생성->전역 컨텍스트로 이동->x선언 및 초기화 ... 2.실행->x=1할당
function foo() { //1.foo선언 및 초기화   2.실행->foo 평가
                    //3.foo 함수 실행 컨텍스트
    const y=2;        //y선언 및 초기화, y=2 할당
    function bar() {    //bar호출(컨텍스트 스위칭 ->bar함수)
                        //bar함수 실행 컨텍스트
        const z=3;          //z 선언 및 초기화 -> z=3 할당
        console.log(x+y+z);
    }

    bar();
}       //bar함수실행컨텍스트 종료

foo();
        //foo함수실행컨텍스트 종료

//전역 실행 컨텍스트 종료


///클로저

const x2 = 1;

// ①
function outer() {
  const x2 = 10;
  const inner = function () { console.log(x2); }; // ②
  return inner; 
}
const innerFunc = outer();
innerFunc();




let num1=0;
const increase1=function() {return ++num1;}

console.log(increase1());
console.log(increase1());
console.log(increase1());
//기능 수행, 정보은닉 실패

const increase2=function() {
let num2=0;
return ++num2;
}

console.log(increase2());
console.log(increase2());
console.log(increase2());
//정보은닉 수행, 기능 실패



const increase3=(function () {
    let num3=0;
    return    function() {return ++num3;};
}()); //즉시 실행 함수에 인자를 아무것도 넣지 않고 실행한다는 의미

console.log(increase3()); //1
console.log(increase3()); //2
console.log(increase3()); //3
//정보은닉 및 기능 모두 성공
//이걸 다시 쓰면

function increase31() {
    let num31=0;
    const inner2=function() {return ++num31;}
    return inner2;
    //위와 마찬가지로 리턴-함수-리턴 꼴
}
const innerFunc2=increase31(); 
console.log(innerFunc2());//위와 마찬가지로 리턴-함수-리턴-() 꼴
console.log(innerFunc2());
console.log(innerFunc2());
//위와 동일하다. 


const Counter=( function() {
    let number=0;
    function Counter() {} //위와 다르게 앞에 const 넣어서 함수 리터럴로 만들어줬으므로,
    //이걸 추가한다. Counter가 선언되지 않아 인식할 수 없기 때문에

    Counter.prototype.increase=function() {return ++number;}

    Counter.prototype.decrease=function() {return --number;}
    
    return Counter;

}
());
const counter=new Counter();
console.log(counter.increase()); //1
console.log(counter.increase()); //2
console.log(counter.increase()); //3

console.log(counter.decrease()); //2
console.log(counter.decrease()); //1
console.log(counter.decrease()); //0