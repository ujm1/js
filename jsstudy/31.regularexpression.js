const str='hello! how are you doing?';

const re1=/h/;
const re2=/h/g;

console.log(re1.test(str)); //t
console.log(re2.test(str)); //t

const result1=str.match(re1);
const result2=str.match(re2);
console.log(result1); //첫번째 h 하나에 대해서만 
console.log(result2); //['h','h']
console.log(str.replace(/hello/,'hi')); //hi! how are you doing?

console.log(str.replace(/h/,'H')); //Hello! how are you doing?

console.log(str.replace(/h/g,'H')); //Hello! How are you doing?

console.log(str.match(/[A-Za-z]/g)); //알파벳 하나하나..

console.log(str.match(/[^A-Za-z]/g)); //[ '!', ' ', ' ', ' ', ' ', '?' ]

console.log(str.toUpperCase()); //HELLO! HOW ARE YOU DOING?
/*또는*/ console.log(str.match(/[A-Za-z]+/g)); //[ 'hello', 'how', 'are', 'you', 'doing' ]

console.log(str.replace(/ /g,'')); //hello!howareyoudoing?

console.log(str.match(/.../g));
/* [
  'hel', 'lo!',
  ' ho', 'w a',
  're ', 'you',
  ' do', 'ing'
] */

console.log(str.match(/[^A-Za-z' ']/g)); //[ '!', '?' ]. 공백도 제거

console.log(str.match(/^y,u$/)); //실패

console.log(str.match(/...../g)); //[ 'hello', '! how', ' are ', 'you d', 'oing?' ]

'abc'.split('').forEach(ch=>{console.log(String.fromCharCode(ch.charCodeAt()-32));});