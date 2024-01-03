function Person(name) {this.name=name;}
const me=new Person('lee');
console.log(me.__proto__===Person.prototype);
console.log(me.constructor===Person);
console.log(Object.getPrototypeOf(me)===Person);
console.log(me.constructor===Person);
console.log(Object.getPrototypeOf(Person.prototype)===Object);
console.log(Person.prototype.__proto__===Object.prototype);
console.log(Person.prototype.__proto__===Object.prototype);

function Diary(name) {this.name=name;}
const diary=new Diary('2024');
console.log(diary.constructor);

