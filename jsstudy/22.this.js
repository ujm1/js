function f() {
console.log(this);

}
f(); // node에선 global, brower에선 window

// window.f(); brower에선 위와 같음, node에선 오류

{console.log(this);} //블럭내에서의 this도 전역객체, 즉 블럭 벗긴것과 같음

console.log();

const obj={name:'홍길동', 
printName:function() {console.log(this.name);},
printNumbers:(a,b)=>console.log(this.name, a,b),
printThis:()=>console.log(this),
};
obj.printName(); //홍길동 출력
obj.printNumbers(3,4); //undefined 3 4 출력. 
/*즉 this가 obj를 의미하지 않음. 화살표 함수이기 때문에*/
obj.printThis(); //상위인 window
console.log();

function Person(name, age) {
    this.name=name;
    this.age=age;
    (this.printPerson=function() {
        console.log(this.name, this.age);
    }),
    (this.printPerson2=()=>console.log(this.name,this.age));
}           //화살표함수:실행 컨텍스트: 상위의 this
const person=new Person('홍길동',30);
person.printPerson(); //홍길동 30
person.printPerson2(); //홍길동 30
console.log();

//call this로 사용할 객체와 인자리스트(,로 구분)
//apply this로 사용할 객체와 인자리스트(배열)
//bind  객체 지정 및 함수 반환
const obj1={name:'홍길동',printName:function(){console.log(this.name);},
printNumbers:function(a,b){console.log(this.name, a,b);},
printThis: function() {console.log(this);}
};

const obj2={name:'강감찬'};

obj1.printName(); //홍길동. 당연히
obj1.printNumbers.call(obj2,3,4); //강감찬 3 4. 즉 printNumbers의 this.name이 obj2.name이 되는 것
obj1.printNumbers.apply(obj2,[3,4]); //강감찬 3 4. 똑같으나 인자를 배열
console.log();


const obj3={name:'홍길동',printName: ()=>console.log(this.name),
printNumbers:(a,b)=>console.log(this.name, a,b),
printThis: ()=>console.log(this)
};

const obj4={name:'강감찬'};

obj3.printName(); //화살표함수이므로 상위 컨텍스트->전역객체의 name:undefined
obj3.printNumbers.call(obj4,3,4); //화살표 함수는 call이나 apply로 전달할 수 없다.
//그러므로 둘다 undefined 3 4 출력
obj3.printNumbers.apply(obj4,[3,4]);

function f2() {return this.name;}

const obj5={name:'홍길동'};
const newf=f2.bind(obj5); ////f2룰 호출하고 거기에 this로 obj5를 지정
console.log(f2.bind(obj5));
console.log(f2.bind(obj5)()); //함수의 반환까지
console.log(newf()); //위와 같은 코드
console.log();
