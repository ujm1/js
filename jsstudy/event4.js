/*전역함수에서의 this는 window
이벤트 프로퍼티와 addeventlistnenterr의 이벤트 핸들러 내에서의 
this는 이벤트 타깃 객체 
이벤트 핸들러가 화살표함수리때는 이벤트타깃객체가 아니라 window*/

function handleClick() {console.log(this);} //window
//onclick어트리뷰트의 이벤트핸들러

document.querySelector('#btn1').onclick=function() {console.log(this);}; //btn1
//onclick프라퍼티의 이벤트핸들러

document.querySelector('#btn2').addEventListener('click',function(){console.log(this);});
//addEventListener의 이벤트핸들러.             //btn2

document.querySelector('#btn3').addEventListener('click',()=>console.log(this)); //window
//addEventListener의 이벤트핸들러.(화살표함수)             //window

console.log();
document.querySelector('#btn4').addEventListener('click',function() {
    printInfo(this.data.name, this.data.age)  }); //쓰는게 잘못되서 오류
//이벤트핸들러 내에 인자 전달(dataset 이용-그래서 html에서 dataset 관련 써줌)


const printInfo=function(name,age) {console.log(name,age);};

/* 커스텀 이벤트 : 내장되어 있는 이벤트 생성자 함수를 이용하는 방법과, 사용자 정의하는 방법이 있다.*/ 

const myMouseEvent=new MouseEvent('click',{bubbles:true, cancelable:true, clientX:100,clientY:100});
console.log(myMouseEvent.bubbles);
console.log(myMouseEvent.cancelable);
console.log(myMouseEvent.clientX);
console.log(myMouseEvent.clientY);

document.querySelector('#btn5').addEventListener('click',function (e) {
    e=myMouseEvent; //이벤트 객체 변경 
});

const myCustomEvent=new CustomEvent('myEvent',{
    detail: {name: '내가만든이벤트', version:'1.0'}
});

document.querySelector('#btn6').addEventListener('myEvent',function(){console.log('내가만든이벤트처리');});

console.log(myCustomEvent.type); //myEvent
console.log(myCustomEvent.detail.name);
console.log(myCustomEvent.detail.version); 
/*
document.querySelector('#btn6').dispatchEvent(myCustomEvent); */
//사용자 정의 이벤트는 dispatchEvent메서드로 trigger해줘야 실행됨. 즉 이거 안쓰면 실행 안됨.       /.

