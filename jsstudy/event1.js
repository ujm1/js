function clickBtn1() {console.log('btn1클릭');}

// const btn2=document.getElementById('btn2');
// btn2.onclick=function() {
//     console.log('btn2 클릭');
// }; //이건 복수개 할당 x, 마지막껄로 덮어씌움

// const func1=function() {console.log('dd');};
// btn2.addEventListener('click',func1);
// //이렇게 이름 정해주면 나중에 삭제하기 편함
// btn3.removeEventListener('click',func1);
// //삭제

const fun1=function(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    console.log(e.bubbles);
    console.log(e.cancelable);
    console.log(e.defaultPrevented);
    console.log(e.isTrusted);
    console.log(e.timeStamp);
}

btn2.addEventListener('click',fun1);

const btn3=document.getElementById('btn3');
btn3.addEventListener('click', function() {console.log('btn3 클릭, 1번 핸들러 호출');});
btn3.addEventListener('click',function() {console.log('btn3 클릭, 2번 핸들러 호출');})
//복수개 할당 가능

// $('btn3').on('click',function() {console.log('제이쿼리로');});