$(function () {
  $('#GET').on('click', function () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET', //ajax에서 url의 json을 get 방식으로 가져온다
    }).done(function (result) {
      //ajax 가져오면 이 함수 실행
      $('#sp').text(JSON.stringify(result)); //가져온건 직렬화해서 문자열로 만들걸 sp에 넣는다
    });
  });

  $('#POST').on('click', function () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'POST',

      contentType: 'application/json', //페이로드 타입
      dataType: 'json',
      data: '{ "userId": 10, "id": 201, "title": "vue-post", "completed": false }', //데이터
    }).done(function (result) {
      //ajax 가져오면 이 함수 실행
      $('#sp').text(JSON.stringify(result)); //가져온건 직렬화해서 문자열로 만들걸 sp에 넣는다
    });
  }); //{"userId":10,"id":201,"title":"vue-post","completed":false} 출력


  $('#PUT').on('click', function () { //수정
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/200', //200을 수정
      method: 'PUT',

      contentType: 'application/json', //페이로드 타입
      dataType: 'json',
      data: '{ "userId": 10, "id": 200, "title-re": "react-post", "completed": false }', //데이터
    }).done(function (result) {
      //ajax 가져오면 이 함수 실행
      console.log('수정 완료');
      $('#sp').text(JSON.stringify(result)); //가져온건 직렬화해서 문자열로 만들걸 sp에 넣는다
    });
  }); //  {"userId":10,"id":200,"title-re":"react-post","completed":false} 출력

  $('#PATCH').on('click', function () { //수정
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/200', //200을 수정
      method: 'PATCH',

      contentType: 'application/json', //페이로드 타입
      dataType: 'json',
      data: '{ "userId": 10, "id": 200, "title-re": "react-post", "completed": false }', //데이터
    }).done(function (result) {
      //ajax 가져오면 이 함수 실행
      console.log('수정 완료');
      $('#sp').text(JSON.stringify(result)); //가져온건 직렬화해서 문자열로 만들걸 sp에 넣는다
    });
  }); //  {"userId":10,"id":200,"title-re":"react-post","completed":false} 출력

  $('#DELETE').on('click', function () { //수정
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/200', //200을 삭제
      method: 'DELETE',
     //삭제할거니까 뭐 안해도 됨
    }).done(function (result) {
      //ajax 가져오면 이 함수 실행
      console.log('삭제 완료');
      $('#sp').text(JSON.stringify(result)); //가져온건 직렬화해서 문자열로 만들걸 sp에 넣는다
    });
  }); //  {} 출력
});
