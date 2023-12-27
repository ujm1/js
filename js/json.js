console.log('Hello JSON!');

const obj = {
    'name':'홍길동',
    'age':20,
    'hobby':['축구','스키']
}; 

let name=obj.name;
obj.name='강감찬';

const arr= obj.hobby;

let firstHobby=obj.hobby[0];

const arr2=[1,2,3,4,5];

//객체나 배열은 const로

let func=function() {
    console.log('hello world');
};

func();

let reg=/abc/; //정규표현식