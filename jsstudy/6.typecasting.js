//명시적 explicit
let num=3;
let numStr=String(num);
console.log(numStr, typeof numStr);

let str='100';
let strNum=Number(str);
console.log(strNum, typeof strNum);

let str2='true';
let str2Bool=Boolean(str2);
console.log(str2Bool,typeof str2Bool);

//묵시적 implicit
console.log(1+"hello", typeof (1+'hello'));
console.log(true+'hello'); //->truehello
console.log(1+'100');
console.log(3*'100');
console.log(true*100);
console.log(false||1);

//단축평가
console.log(true||'dog'); //->true
console.log('dog'||true); //->dog
console.log(false&&'dog'); //->false
console.log('dog'&&false); //->false
console.log('dog'||'cat'); //->dog
console.log('dog'&&'cat'); //->cat

//옵셔널 체이닝
let n=null;
//let na=n.value; -> null의 value가 없으므로 에러
let na=n?.value; //->null이면 undefined로 처리해 에러방지

//null 병합
let n2=null;
let n2a=n2 ?? 'hello'; //->왼쪽이 null이나 undefined이므로 우측 반환