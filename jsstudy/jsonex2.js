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
    moveData($(this).parent().attr('id'));
  });

  $('.ncbtn').on('click', function () {
    moveData($(this).parent().attr('id'));
  });
};

// 5. 버튼누르면 완료/미완료 이동
const moveData = function(clickedId) {
  const targetObj = totalArray.filter(obj => String(obj.id)===clickedId);
  targetObj[0].completed = !targetObj[0].completed;
  if(cArray.includes(targetObj[0])) {
      cArray.splice(cArray.indexOf(targetObj[0]), 1);
      ncArray.unshift(targetObj[0]);
  } else {
      ncArray.splice(ncArray.indexOf(targetObj[0]), 1);
      cArray.unshift(targetObj[0]);
  }
  printData(cArray, ncArray);
}

// 6. 정렬
const sortData = function(sortType) {
  switch (sortType) {
      case "cASC":    cArray.sort((a, b) => a.id - b.id); break;
      case "cDESC":   cArray.sort((a, b) => b.id - a.id); break;
      case "ncASC":  ncArray.sort((a, b) => a.id - b.id); break;
      case "ncDESC": ncArray.sort((a, b) => b.id - a.id);
  }
  printData(cArray, ncArray);
}

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
