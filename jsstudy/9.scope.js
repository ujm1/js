var gv = "global";
let gl = "global";
const gc = "global";

console.log(gv);
console.log(gl);
console.log(gc); //정상

console.log("");

function f1() {
  console.log(gv);
  console.log(gl);
  console.log(gc);
} //정상
f1();
console.log("");

{
  console.log(gv);
  console.log(gl);
  console.log(gc);
} //정상
console.log("");

function f2() {
  var fv = "func";
  let fl = "func";
  const fc = "func";
  console.log(fv);
  console.log(fl);
  console.log(fc);
} //정상
f2();
console.log("");

{
  var bv = "block";
  let bl = "block";
  const bc = "block";
  console.log(bv);
  console.log(bl);
  console.log(bc);
}
console.log(bv); //
//console.log(bl); 에러. 블록에서 선언한걸 밖에서 쓰려면 오직 var만. 전역변수 취급받으므로
//console.log(bc); 마찬가지

console.log();

var sv = "global scope-chain";
let sl = "global scope-chain";
const sc = "global scope-chain";

function f3() {
  var sv = "function scope-chain";
  var sl = "function scope-chain";
  var sc = "function scope-chain";
  {
    var sv = "block scope-chain";
    let sl = "block scope-chain";
    const sc = "block scope-chain";
    console.log(sv); //block
    console.log(sl); //block
    console.log(sc); //block
    console.log();
  }
  console.log(sv); //block. block의 var도 전역변수 취급받으므로 오직 이것만 block 출력
  console.log(sl); //function
  console.log(sc); //fucntion
  console.log();
}
f3();

console.log(sv); //global
console.log(sl); //global
console.log(sc); //global
console.log();

console.log(h);
h = 1;
console.log(h);
var h;
console.log(h);

l = 2;
console.log(l);

f4();
function f4() {
  console.log("f4");
}

f4();
function f4() {
  console.log("f5");
}

f4();

var exv = "g";
let exl = "g";

function f5() {
  console.log(exv);
  console.log(exl);
  exv = "f";
  exl = "f";
  var exv;

}
f5();
console.log(exl);


