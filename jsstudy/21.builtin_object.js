

//global (ide-vsc-노드js)
console.log(global);
console.log(this);
console.log(global===this); //false
console.log(module.exports===this); //true. node 전역스코프에서의 this

//window (브라우저)
// console.log(window);
// console.log(this);
// console.log(window===this);

let uri='http://google.com?name=홍길동';
let encodedUri=encodeURI(uri);
console.log(encodedUri); //http://google.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
let decodedUri=decodeURI(encodedUri);
console.log(decodedUri); //http://google.com?name=홍길동

let encodedUriComp=encodeURIComponent(uri);
console.log(encodedUriComp);
let decodedUriComp=decodeURIComponent(encodedUriComp);
//http%3A%2F%2Fgoogle.com%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
//?& 이런 기호까지 인코딩

console.log(decodedUriComp);