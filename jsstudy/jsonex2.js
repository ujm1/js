/* eslint-disable no-undef */
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=>response.json())
// .then(json=>console.log(json));
//colpleted가 true인 것들은 왼쪽, false인 것들은 오른쪽

$(function () {
  $('#btn').on('click', function () {
    $.get({
      url: 'https://jsonplaceholder.typicode.com/todos',
      success: function (result) {
        result.map(todo => {
          console.log(todo);
          if (todo.completed == true) {
            $('thead').append(
              $('<tr></tr>')
                .append($('<td>' + todo.userId + '</td>'))
                .append($('<td>' + todo.id + '</td>'))
                .append($('<td>' + todo.title + '</td>'))
                .append($('<td>' + todo.completed + '</td>'))
                .append($('<td>' + user.address.street + ' ' + user.address.suite + ' ' + user.address.city + '</td>')),
            );
          } //true
          else {
            $('thead').append(
              $('<tr></tr>')
                .append($('<td>' + todo.userId + '</td>'))
                .append($('<td>' + todo.id + '</td>'))
                .append($('<td>' + todo.title + '</td>'))
                .append($('<td>' + todo.completed + '</td>'))
                .append($('<td>' + user.address.street + ' ' + user.address.suite + ' ' + user.address.city + '</td>')),
            );
          } //false
        }); //map
      }, //success
    }); //get
  }); //btn
}); //jquery
