window.onload = function () {
  // const btn1=document.getElementById("btn1");
  // btn1.addEventListener("click",function(event) {
  //     const result=document.getElementById("result");
  //     result.innerHTML=this.value+'버튼이 클릭됨';
  //                     //여기서 this는 자동적으로 앞의 btn1로 암묵적으로 바인딩해줌(예외)
  //                     //즉 btn1버튼이 클릭됨 이라고 뜬다
  // });

  //클릭한 버튼의 아이디를 result에 출력하기
  // const p=document.getElementsByTagName("P");
  // console.log(p[1]); //2번째 p인 p(버튼 포함하는) 출력됨

  const btns = document.getElementsByClassName('btn');
  const result1 = document.getElementById('result1');
  for (btn of btns) {
    btn.addEventListener('click', function () {
      result1.innerHTML = this.value + ' 버튼이 클릭됨!';
    });
  }

  // 실습 2) 텍스트입력상자에 숫자 두개를 넣고 합계를 누르면 result2에
  //        합계 출력
  const btnplus = document.getElementById('btnplus');
  const result2 = document.getElementById('result2');
  const txt2s = document.getElementsByClassName('txt2');
  btnplus.addEventListener('click', function () {
    result2.innerHTML = parseFloat(txt2s[0].value) + parseFloat(txt2s[1].value);
  });

  // 실습 3) 텍스트입력상자에 숫자 두개를 넣고 +,-,*,/ 버튼 누르면
  //         result3에 결과 출력
  const result3 = document.getElementById('result3');
  const txt3s = document.getElementsByClassName('txt3');
  const btn3s = document.getElementsByClassName('btn3');
  for (btn3 of btn3s) {
    btn3.addEventListener('click', function () {
      let txt3Val1 = parseFloat(txt3s[0].value);
      let txt3Val2 = parseFloat(txt3s[1].value);
      switch (this.value) {
        case '+':
          result3.innerHTML = txt3Val1 + txt3Val2;
          break;
        case '-':
          result3.innerHTML = txt3Val1 - txt3Val2;
          break;
        case '*':
          result3.innerHTML = txt3Val1 * txt3Val2;
          break;
        case '/':
          result3.innerHTML = txt3Val1 / txt3Val2;
          break;
      }
    });
  }

  //실습4" li를 클릭하면 화면 배경색 변경 ㅇ

  const colors = document.getElementById('bgcolorselect');
  const btncolors = document.getElementsByClassName('btncolor');
  console.log(colors);
  console.log(btncolors);
  const body1 = document.getElementById('body1');
  // for (color of colors) {
  //   color
  // }
  for (btncolor of btncolors) {
    btncolor.addEventListener('click', function (event) {
      switch (this.value) {
        case '빨강':
          body1.style.backgroundColor = 'red';
          break;
        case '파랑':
          body1.style.backgroundColor = 'blue';
          break;
        case '초록':
          body1.style.backgroundColor = 'green';
          break;
      }
    });
  }

  //강사코드   const clcolor = document.getElementsByClassName('clcolor');
  // for (eachEle of clcolor) {
  //   eachEle.addEventListener('click', function() {
  //     document.body.style.backgroundColor = this.getAttribute('value');
  //   });
  // }


  //실습5 체크한 과일명들을 result5에 출력 -> 1개만 됨
  // const result5 = document.getElementById('result5');
  // const cbs = document.getElementsByName('cb');
  // console.log(cbs);
  // for (cb of cbs) {
  //   cb.addEventListener('click', function (event) {
  //     if (cb.checked) {
  //       result5.innerHTML = this.value;
  //     }
  //   });
  // }

  const result5 = document.getElementById('result5');
  const clcb = document.getElementsByClassName('clcb');
  const resultArr = [];
  for (eachEle of clcb) {
    eachEle.addEventListener("change", function() {
      const thisVal = this.value;
      const thisValIdx = resultArr.indexOf(thisVal);
      thisValIdx<0 ? resultArr.push(thisVal) : resultArr.splice(thisValIdx, 1);
      result5.innerHTML = resultArr;
    });
  }

  //실습6 구구단
  // const result6 = document.getElementById('result6');
  // const calnums = document.getElementById('sel');
  // const calnumsmall = document.getElementById('sel').childNodes;
  // console.log(calnums);
  // console.log(calnums[0].value); //select
  // console.log(calnums[1].value); //2
  // console.log(calnumsmall);
  // console.log(calnumsmall.value);
  // for (calnum of calnums) {
  //   calnum.addEventListener('click', function (event) {
  //     if (calnum != calnums[0]) {
  //       const aa=this;
  //       for (let i; i <= 9; i++) {
  //         console.log(aa);
  //         result6.innerHTML = aa.value;
  //       }
  //     }
  //   });
  // }
//   calnums.addEventListener('click', function (event) {
// result6.innerHTML=
//     calnums.options[calnums.seletedIndex].value;
    
//   });

// calnums.addEventListener("click", function() {

//   result6.innerText = function() {return this.value;}

  const result6 = document.getElementById('result6');
  const sel = document.getElementById('sel');
  sel.addEventListener('change', function() {
    const selVal = this.value;
    if (this.value != '--select--') {
      for (resultStr='', i=2; i<10; i++) {
        resultStr += `${selVal} * ${i} = ${selVal*i} `;
      }      
      result6.innerHTML = resultStr;
    } else {
      result6.innerHTML = '';
    }
  });


  //실습7 버튼 클릭 시 데이터를 테이블에 출력
  //홍길동 100 100 100 강감찬 90 90 90 이순신 80 80 80
//   const tablerows = document.getElementsByClassName('tablerow');
//   const sname = document.getElementsByClassName('sname');
//   const skor = document.getElementsByClassName('skor');
//   const smath = document.getElementsByClassName('smath');
//   const seng = document.getElementsByClassName('seng');
//   const tablebtn = document.getElementById('btnscore');
//   console.log(tablerows);
//   console.log(tablerows[0]);
//   console.log(tablerows[0][0]);
//   btnscore.addEventListener('click', function (event) {
//     tablerows[0].innerText = '홍길동';
//   });
// });

const btnscore = document.getElementById('btnscore');
  const tds = document.querySelectorAll('tbody td');
  btnscore.addEventListener('click', function() {
    const students = ['홍길동',100,100,100,'강감찬',90,90,90,'홍길동',80,80,80];
    tds.forEach(function(ele, idx) {
      ele.innerHTML = students[idx];
    });
  });


}