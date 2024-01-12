
let today = new Date();
let nytoday= new Date();
console.log(nytoday.setHours);
// document.querySelector('#timer').addEventListener('load', function () {
window.onload=function() {
  setInterval(
    (year, month, day, hour, minute, second) => {
      document.querySelector('#timer').textContent = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
    },
    1000,
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
    today.getHours(),
    today.getMinutes(),
    today.getSeconds()
  );
/*2024년 1월 12일 11시 28분 50초*/

setInterval(
    (year, month, day, hour, minute, second) => {
      document.querySelector('#timer2').textContent = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
    },
    1000,
    nytoday.getFullYear(),
    nytoday.getMonth() + 1,
    nytoday.getDate(),
    nytoday.getHours(),
    nytoday.getMinutes(),
    nytoday.getSeconds()
  );
};