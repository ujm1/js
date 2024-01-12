/*const $color=document.querySelector('#div1');
$color.style.backgroundColor='red';
const $input1=document.querySelector('#input1');
const $txt1=document.querySelector('#txt1');
const $sp1=document.querySelector('#sp1');
const $body=document.querySelector('body');
const $div3=document.querySelector('#div3');
const $sp2=document.querySelector('#sp2');
const $div4=document.querySelector('#div4');

$input1.addEventListener('onkeyup',function(e) {
    if (e.key !== 'Enter') return;
    else if (e.keyCode==82||114) {$color.style.backgroundColor='red';}
    else if (e.keyCode==66||98) {$color.style.backgroundColor='blue';}
    else if (e.keyCode==71||103) {$color.style.backgroundColor='green';}
});

$txt1.addEventListener('onkeyup',function(e) {
    if (e.key !== 'Enter') return;
    $sp1.textContent=e.target.value;
});

$div3.addEventListener('mousedown', e => {
    $sp2.innerHTML=e.offsetX+' '+e.offsetY});

//4. 화면을 클릭한 곳에 가로 10 세로 10 노란색 상자 표시
$div4.addEventListener('mousedown', e => {
   const $box=$div4.cloneNode(true);
    $box.style.width='10px';
    $box.style.height='10px';
    $box.style.color='yellow';
    $box.style.left=e.offsetX;
    $box.style.top=e.offsetY;
}); */

//강사코드
// 실습 1) 키보드 r키를 누르면 화면 배경을 red로 변경
//        키보드 b키를 누르면 화면 배경을 blue로 변경
//        키보드 g키를 누르면 화면 배경을 green으로 변경
document.querySelector("body").addEventListener("keydown", 
    function(e) {
    switch (e.keyCode) {
     case 82: case 114: this.style.backgroundColor = "red"; break;
     case 66: case 98: this.style.backgroundColor = "blue"; break;
     case 71: case 103: this.style.backgroundColor = "green";
    }
});

// 실습 2) #txt1에 글자를 입력하면 #sp1에 똑같이 출력되도록
document.querySelector("#txt1").addEventListener("keyup", function(e) {
    document.querySelector("#sp1").textContent = e.target.value;
});

// 실습 3) 마우스를 클릭하면 #sp2에 클릭한 x, y 좌표를 출력
window.addEventListener("click", function(e) {
    document.querySelector("#sp2").textContent 
        = `x:${e.clientX}, y:${e.clientY}`;
});

// 실습 4) 화면의 클릭한 곳에 가로10px, 세로10px 노란색 상자를 표시
const yBox = document.createElement("DIV");
yBox.style.width = "10px";
yBox.style.height = "10px";
yBox.style.backgroundColor = "yellow";
yBox.style.position = "absolute";
window.addEventListener("click", function(e) {
    const cNode = yBox.cloneNode();
    cNode.style.left = e.clientX + "px";
    cNode.style.top = e.clientY + "px";
    document.body.appendChild(cNode);
});
