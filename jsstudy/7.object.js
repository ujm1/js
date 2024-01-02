const obj1={
    name: "홍길동",
    age: 20,
    address: '지구 어딘가'
};

console.log(obj1);

const obj2=new Object();
obj2.name='홍길동';
obj2.age=20;

console.log(obj2);

const obj3=Object.create(Object);
obj3.name='홍길동';

console.log(obj3);

function Person(name, age) {
	this.name=name;
	this.age=age;	}

const person=new Person('홍길동',20);

console.log(person);



Person.prototype.hobby=[`L`,'바둑'];
/*생성자 함수는 protype이라는 프로퍼티 가짐.
js에서 모든 객체는 적어도 하나의 다른 객체를 상속(확장)함
Person생성자함수가 가진 prototype라는 프로퍼티를(일종의 메소드같은) 통해
Person 객체에 hobby라는 프로퍼티를 새로 생성한 것 */

Person.prototype.printHobby=function() {
    console.log(this.hobby);
};

person.printHobby();

for (prop in person) {console.log(prop,person[prop])} ;

