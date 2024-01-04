window.onload=function() {
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
    
    const btns=document.getElementsByClassName('btn');
    console.log(btns);
    console.log(btns.length); //5
    const result=document.getElementById('result');
    for(btn in btns) {
        btn.addEventListener('click',function(event) {
            result.innerHTML=this.value+'버튼이 클릭됨';
        });
    }

};