const students = [
    {"s001" : {sname: "홍길동", skor: 100, seng: 90, smath: 80}},
   {"s002" : {sname: "강감찬", skor: 90, seng: 80, smath: 70}},
     {"s003" : {sname: "이순신", skor: 80, seng: 70, smath: 60}},
    {"s004" : {sname: "장보고", skor: 70, seng: 60, smath: 50}},
     {"s005" : {sname: "최영", skor: 60, seng: 50, smath: 40}}
 ];


                                    //여기서 student는 ele 개념
const sumEng = students.reduce((sum, student) => {
    return sum + student[Object.keys(student)].seng;}, 0);
                       //Object.keys(student) : stdent의 배열이며 뒤에 [0] 붙이면 s001만
const sumKor = students.reduce((sum, student) => {
        return sum + student[Object.keys(student)].skor;}, 0);

const sumMath = students.reduce((sum, student) => {
            return sum + student[Object.keys(student)].smath;}, 0);


//  for (const student of students) 
//    console.log(student); 
   //:{ s001: { sname: '홍길동', skor: 100, seng: 90, smath: 80 } } 
  
//    console.log(Object.keys(student)); //['s001']
//      배열이므로 's001만 뽑아내려면 Object.keys(student)[0] 하면됨

//    console.log(student[Object.keys(student)]); 
   //{ sname: '홍길동', skor: 100, seng: 90, smath: 80 }

//    console.log(student[Object.keys(student)].sname, //홍길동

//또는student[Object.keys(student)[0]].sname);




for (const student of students) {
console.log(
    Object.keys('s001').sname+
' 국어:'+(student[Object.keys(student)].skor-sumKor/5)+', '+
'영어:'+(student[Object.keys(student)].seng-sumEng/5)+', '+
'수학:'+(student[Object.keys(student)].smath-sumMath/5)); 
}
console.log("");

//2번
    for (const student of students) {
    console.log(Object.keys(student)+" "+
    student[Object.keys(student)].sname+" "+
'국어:'+student[Object.keys(student)].skor+" "+
'영어:'+(+student[Object.keys(student)].seng)+" "+
'수학:'+(+student[Object.keys(student)].smath));
}
console.log('총점 국어:'+sumKor+' '+'영어:'+sumEng+' 수학:'+sumMath);
