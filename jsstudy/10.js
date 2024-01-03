//디스크립터
const person = { name: "홍길동" };

console.log(Object.getOwnPropertyDescriptor(person, "name"));

console.log();

person.age = 30;
console.log(Object.getOwnPropertyDescriptors(person));

const person2 = {
  firstName: "Ungmo",
  lastName: "Lee",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(person2);

console.log(Object.getOwnPropertyDescriptors(person2));

const person3 = {};
Object.defineProperty(person3, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person3, "lastName", {
  value: "길동",
});

Object.defineProperty(person3, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },

  set(name) {
    [this.firstName, this.lastName] = name.split(` `);
  },
});

console.log(Object.getOwnPropertyDescriptors(person3));

const person4 = {};
Object.defineProperties(person4, {
  firstName: {
    value: "Ungmo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: { value: "길동" },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
      [this.firstName, this.lastName] = name.split(` `);
    },
  },
});

console.log(Object.getOwnPropertyDescriptors(person4));

//생성자 함수
const Car = function (name, color) {
  this.name = name;
  this.color = color;
};
const car1 = new Car("bmw", "color");
console.log(car1);
const car2 = new Car("volov", "red");
console.log(car2);
console.log(car2.color);

function Tire() {
  this.printTireThis = function () {
    console.log(this);
  };
}
const tire = new Tire();
tire.printTireThis(); //this가 tire가 됨

console.log();

// function Tire2() {
//     this.printTireThis=function() {console.log(this);}
//     const obj=new Object();
// return obj;} //return 해줬으므로 위의 this가 obj가 되는데, obj엔 printTireThis라는게 없으므로 에러
// const tire2=new Tire2();
// tire2.printTireThis();

//일급객체

//인자arguments
function f3() {
  console.log(f3.arguments);
  console.log(f3.arguments.length);
  console.log(f3.length);
  console.log(f3.arguments[1]);
}
f3(1, 2, 3);

function f4() {
  console.log(f4.name);
  console.log(f4.caller.name);
}
function f5() {
  f4();
}
f5();

const cpu = { name: "i9" };

//프로토타입
console.log(cpu.__proto__ === Object.prototype);
console.log(cpu.hasOwnProperty("name"));
console.log(cpu.hasOwnProperty(cpu.__proto__));

for (prop in cpu) {
  console.log(`${prop}:${cpu[prop]}`);
} //키와 값

function Diary(name) {
  this.name = name;
}

const diary = new Diary("2024");
console.log(Diary.hasOwnProperty("prototype"));
console.log(diary.hasOwnProperty("prototype"));
console.log(function () {}.hasOwnProperty("prototype"));
console.log({}.hasOwnProperty("prototype"));
console.log(diary.constructor);

const diary2 = new Diary("2025");
console.log(diary2.constructor);
console.log(diary.constructor === diary2.constructor);
console.log(function () {}.constructor);
const obj = new Object();
console.log(obj.hasOwnProperty("prototype"));

function Person6(name) {
  this.name = name;
}
Person6.prototype.sayHello = function () {
  console.log(`My name is ${this.name}`);
};
const me = new Person6("Lee");
me.sayHello();

function Person66(name) {
  this.name = name;
}

const me6 = new Person66("lee");

const parent = {
  sayHello() {
    console.log(`my name is ${this.name}`);
  }
};
Object.setPrototypeOf(me6, parent);
me6.sayHello();

console.log(me6.constructor===Object);

function Person(name) {this.name=name; console.log(name);}

person.staticProp='staticProp';
person.staticMethod=function() {console.log(staticMethod);}

const me2=new Person('Lee');

function Foo() {}


Foo.prototype.a=function() {console.log('aaa')};

const foo=new Foo();

foo.a() 

Foo.a=function () {console.log('bbbbb');};


Foo.a(); 

const person222={name:'lee', 
__proto__:{age:20}};

for(const key in person222) {console.log(key+":"+person222[key]);}

console.log('age' in person222);

console.log(Object.keys(person222));