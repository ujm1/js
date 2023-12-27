//eval() : 자바스크립트 문장을 해석해서 실행하는 함수
let  var1="1+2";
let result1=eval("("+val1+")");

let firstname='길동';
let lastname='홍';

let str1=`
{ 
    
    "firstname":${firstname},
    'lastname':${lastname},
    "age":30
    
}
`;

//아직 문자열이지만 이걸 json 객체로 만들려면

const jsonObj=eval("("+str1+")");
jsonObj.firstname='순신';

let str2= `[
1,"홍길동", true, new Object(), {}

// ]`; /* 이런식으로 js의 배열은 자바와 달리 
타입과 무관하게 값 넣을 수 있음 */

const arrObj=eval("("+str2+")");
arrObj[0]=100;


//반대로 json 객체를 json문자열로 변환하려면
const jsonObj2={
    "firstname":"길동",
    "lastname":"홍"

};

let str3=JSON.stringify(jsonObj);
//이러면 json이었던 jsonObj가 문자열로 변환됨

let jsonObj3=JSON.parse(str2);
//이러면 반대로 문자열이 json 객체로 변환됨(간단)