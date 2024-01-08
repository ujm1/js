/* eslint-disable no-undef */

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(json=>console.log(json));

$(function () {
  let a;
  let cArray = [];
  let ncArray = [];
  getData();
});

const getData = function () {
  $.get('https://jsonplaceholder.typicode.com/todos')
    .done(result => procData(result)) //완료되었으면
    .fail(() => console.log('getData error!!!')); //실패했으면
};

const procData = function (result) {
  cArray = result.filter(obj => obj.completed); //조건을 만족하는 값만 뽑아온다
  ncArray = result.filter(obj => !obj.completed);
  printData(cArray, ncArray);
};

const printData = function (cArray, ncArray) {
  cArray.forEach(obj => {
    $('#completed ul').append(`<li>${obj.id} ${obj.title}
      <input type='button' class='cbtn' value='미완료' /></li>`);
  });
  change();
  /////////////////////////////////////////
  ncArray.forEach(obj => {
    $('#notcompleted ul').append(`<li>${obj.id} ${obj.title}
      <input type='button' class='ncbtn' value='완료' /></li>`);
  });
  change();
};

const change = function () {
  $('.cbtn').on('click', function () {
    move($(this).parent().attr('id'));
  });

  $('.ncbtn').on('click', function () {
    move($(this).parent().attr('id'));
  });
};

const move = function (id) {
  console.log(id);
};

//   $('#btn').on('click', function () {
//     $.get({
//       url: 'https://jsonplaceholder.typicode.com/todos',
//       success: function (result) {
//         result.map(todo => {
//           console.log(todo);
//           if (todo.completed == 'true') {
//             $('#completed').append(
//               $('<ul></ul>').append(todo.userId + ' ' + todo.id + '' + todo.title + ' ' + todo.completed),
//             );
//           } //true
//           else {
//             $('#notcompleted').append(
//               $('<ul></ul>').append(todo.userId + ' ' + todo.id + '' + todo.title + ' ' + todo.completed),
//             );
//           } //else
//         }); //map
//       }, //success
//     }); //get
//   }); //btn
// }); //jquery
