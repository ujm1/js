let jsonObjStr=`{
    "firstName":"길동",
    "lastName":"홍",
    "age":20,
    "hobby":["축구","야구","농구"]

}

`; //문자열

const jsonObj=JSON.parse(jsonObjStr);

console.log(jsonObj.firstName);

jsonObj.firstName="길순";

console.log(jsonObj.firstName);

console.log(jsonObj.hobby[1]);

let jsonObjStr2=JSON.stringify(jsonObj);

console.log(jsonObjStr2);

const jsonArr=[ //json
{"name":"홍길동","age":30}, //객체
{"name":"이순신","age":20},
{"name":"강감찬","age":40}
]; //배열

let jsonArrStr=JSON.stringify(jsonArr); //직렬화-문자열로
console.log(jsonArrStr);

const jsonArr2=JSON.parse(jsonArrStr); //역직렬화-객체로
console.log(jsonArr2[1].age);