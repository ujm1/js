$(
    function () {
            $("*").css("font-size","1em");
            $("#ul1").css("background-color","blue"); //id
            $(".lis").css("font-weight","bold"); //class
            $("#ul1 .lis").css("background-color","#ffcc00"); 
            //자손. 즉 상속처럼 하위 요소에 있는 모든.. 띄어쓰기 주의
            $("#ul1>.lis").css("background-color","#ffcc00");
            //첫번째 자식
            $("p:first").css("background-color","lightgray");
            //p중에서 첫번째꺼
            $("[style]").css("font-size","1.2 rem");
            //style이라는 속성을 가진 것들 전부
            $("[id='p1']").css("font-size","1.5em");
            $("p[id='p1']").css("font-size","1.5em");
            $("p[id!='p1']").css("font-size","1.5em");
            $(":button").css("background-color","red");
            //모든 버튼
            $("button").css("background-color","blue");
            //input이 아닌 button만
            $("tr:even").css("background-color","#efefef");
            //tr의 짝수번째 : 회색으로
            $("#table1 tr:odd").css("background-color","#333333");
            //id:table1의...홀수 번째 : 검정색으로.. 적용 안됨
        }
);
