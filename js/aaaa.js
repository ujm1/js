for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(i, j);
  }
}

console.log("Cat" && false);

var obj = {};
var key = "hello";

obj[key] = "world";

console.log(obj);

var a = "<ul>\n\t<li>";
console.log(a);

var b = `<ul>
                    <li>
            <ul>
                                <li>`;
console.log(b);

let s1 = Symbol(1);
let s2 = Symbol(1);
console.log(s1 == s2);
console.log(s1 === s2);
console.log(typeof s1, typeof s2);
console.log(s1.description == s2.description);

const persons = {
  s1: {
    name: "홍길동",
  },

  s2: {
    name: "강감찬",
  },
};

console.log(persons.s1.name);
console.log(persons.s2.name);