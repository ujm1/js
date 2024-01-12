const sto = setTimeout(() => {
  console.log('3초가 지났네요');
  clearTimeout(sto);
}, 3000);

let cnt = 0;
const siv = setInterval(() => {
  console.log(cnt++);
  if (cnt > 10) clearInterval(siv);
}, 1000);

/* 이렇게 하면 0 1 3초가 지났네요(부정확) 2 3 4 ....10까지 출력되고 끝. */

document.querySelector('#btn1').addEventListener('click', function () {
  let cnt = 0;
  setInterval(() => {
    document.querySelector('#counter').textContent = cnt++;
  }, 1);
}); //버튼 누르면 1부터 매우 빠른 속도로 숫자 증식


document.querySelector('#btn2').addEventListener('click',function() {
    setInterval((name,age)=>{document.querySelector('#args').textContent
=`${name}+${age}`;}, 10, '홍길동', 30); //클릭시 홍길동+30 출력. 10은 딜레이, 뒤에 2개는 인자.
})