const Car = class {};
console.log(typeof Car); //function
const Tire = class Tire {};
console.log(typeof Tire); //function
console.log();

class Cat {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi 나는 ${this.name}`);
  }
  static sayHi() {
    console.log(`Hi 나는 ${this.name}`);
  }
}
const cat = new Cat('네로');
console.log(cat);
cat.sayHi(); //Hi 나는 네로
Cat.sayHi(); //Hi 나는 Cat
console.log();

class Dog {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  printName() {
    console.log(this.name);
  }
  makeSound() {
    console.log(this.sound);
  } //
}
const dog1 = new Dog('치와와', '치치');
const dog2 = new Dog('진돗개', '멍멍');
dog1.printName();
dog1.makeSound();
dog2.printName();
dog2.makeSound();

Dog.prototype.age = 10;
console.log(dog1.age); //상속
console.log(dog2.age);

console.log(Dog.age); //undefined
console.log(Dog.prototype.age);

dog1.age = 15;
console.log(dog1.age);
console.log();

class Phone {
  name = '폰';
  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }
}
const phone = new Phone('아이폰');
phone.name = '삼성폰'; //set이 실행됨
console.log(phone.name); //get이 실행됨
console.log();
//즉 위처럼 constructor로 인자와 this를 사용하지 않아도 get과 set을 이용해서 똑같이 쓸 수 있다

class Mouse {
  #name;
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}
const mouse = new Mouse();
// mouse.#name='생쥐'; <-에러
mouse.name = '생쥐';
console.log(mouse.name); //생쥐
console.log();

class Desk {
  static name;
  static #brand;
  static getName() {
    return this.name;
  }
}
Desk.name = '책상';
Desk.brand = '한샘';
console.log(Desk.name); //책상
console.log(Desk.brand); //한샘
console.log(Desk.getName()); //책상
console.log();
//상속

class Animal {
  name;
  eat() {
    console.log('eat');
  }
}
class Bird extends Animal {
  sound() {
    console.log('짹짹');
  }
}

class Mammal extends Animal {
  sound() {
    console.log('sound');
  }
}

const eagle = new Bird();
eagle.name = '독수리';
console.log(eagle.name);
eagle.eat();
eagle.sound(); //짹짹

const tiger = new Mammal();
tiger.name = '호랑이';
console.log(tiger.name);
tiger.eat();
tiger.sound(); //sound
console.log();

//super
class Parent {
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    //하위에서 constructor 쓸거면 반드시 super 추가
    super(name);
    this.age = age;
  }
}
const child =new Child('아들',30);
console.log(child);