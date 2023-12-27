$(function () {
  //   $("#box1").fadeToggle(); box1이 사라진다
  $("#box1").fadeToggle(3000, function () {
    $("#box1").fadeIn(3000, function () {
      alert("fadeIn완료");

      //3초동안 사라졌다가, 3초동안 나타났다가, fadeIn완료 띄우고 끝
    }); //fadeIn
  }); //fadeToggle

  //위의 동작과 동시에 수행
  $("#box2").addClass("box2");
  //box2라는 id에 box2라는 클래스 만든다
  //html에서 클래스 스타일 지정해준대로 변경됨
  $("#box2").css("position","absolote");
  $("#box2").animate(
    { width: "400px", height: "400px", backgroundColor: "#00ff00", 
    //크기와 색 변경
    left:"600px", top:"600px"  //위치 변경.. 작동 안됨
    }, //box2라는 id의 속성 이렇게 변경해줌
    3000,
    function () {
      alert("애니메이션 종료");
    }
  ); //animate
}); //전체 제이쿼리
