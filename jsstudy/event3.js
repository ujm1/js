const $color=document.querySelector('#div1');
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
});