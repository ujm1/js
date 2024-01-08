const obj={
    x:1,
    foo() {return this.x;}, //메서드
    bar: function() {return this.x;} //일반함수
 };

console.log(obj.foo()); //1 
console.log(obj.bar()); //1

console.log(obj.foo.hasOwnProperty('prototype')); //메서드는 constructor없고 prototype도 없음
console.log(obj.bar.hasOwnProperty('prototype')); //true

console.log(()=>({x:1, y:2})); // 이렇게 덮어줌
(()=>console.log('홍길동'))(); //이런 문법도 가능하다는거.


class Person {
    constructor(prefix) {
        this.prefix=prefix;
    }
    changeName(arr) {     //화살표-상위 스코프-this가 Person
        return arr.map(ele=>this.prefix+arr[0]);
    }
}
const person=new Person('나는'); //person의 prefix를 '나는'으로 만듬
console.log(person.changeName(['강감찬'])); 
//저 배열의 요소인 강감찬을 나는+arr[0]=나는+강감찬=나는강감찬으로 변경
console.log();

(function() {const foo=()=>console.log(arguments);
    foo(3,4);})  (1,2); //[Arguments] { '0': 1, '1': 2 }

    console.log(); 

    const obj3=() =>console.log(arguments);
    obj3(1,2,3); //전역의 arguments


function func1(...args) {
    console.log(args);
    console.log(args.length);
}
func1(1,2); //[1,2] 그리고 2
func1(1,2,3);// [1,2,3] 그리고 3

function func2(a, ...args) {
    console.log(args);
    console.log(args.length);
}
func2(1,2); //a가 1이 되서, args는 2만, 그래서 길이도 1
func2(1,2,3); //a가 1이 되서, args는[2,3], 그래서 길이는 2

function func3(a, b=5) {return a*b;}

console.log(func3(1)); //1*5=5
console.log(func3(1,undefined)); //undefined가 나올 경우 기본값으로 대체->1*5=5
console.log(func3(1,2)); //2
console.log(func3(1, null)); //null은 받는다->0
console.log(func3(1, '삼')); //숫자로 인식 못함->NaN