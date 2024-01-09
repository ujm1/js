$(function () {
  getData();
  $('#sortType').on('change', function () {
    sortData($(this).attr('value'));
  });
});

const getData = function () {
  $.get('https://jsonplaceholder.typicode.com/users')
    .done(result => listData(result))
    .fail(() => {
      console.log('데이터 불러오기 실패');
    });
};

const listData = function (result) {
  console.log(result);
  $('tbody').empty();
  // for (let i = 0; i < result.length; i++) {
  //   console.log(result[i].name);

  // $('thead').append(
  //   $('<tr></tr>')
  //     .append($('<td>' + result[i].id + '</td>'))
  //     .append($('<td>' + result[i].name + '</td>'))
  //     .append($('<td>' + result[i].username + '</td>'))
  //     .append($('<td>' + result[i].useremail + '</td>'))
  //     .append($('<td>' + result[i].phone + '</td>'))
  //     .append($('<td>' + result[i].website + '</td>')));

  // }
  result.forEach(resul => {
    $('tbody').append(`
        <tr>
          <td>${resul.id}</td>
          <td>${resul.name}</td>
          <td>${resul.username}</td>
          <td>${resul.phone}</td>
          <td>${resul.email}</td>
          <td>${resul.website}</td>
        </tr>
          `);
  });
};
//for
//listdata

//sortType:정렬
const sortData = function (sortType) {
  console.log(sortType);
  const sortProp = sortType.split('_')[0];
  console.log(sortProp);
  const sortMethod = sortType.split('_')[1];
  console.log(sortMethod);
  if (sortType.split('_')[1]=='ASC') {
    resulArr.sort((a,b)=>a[sortProp]-b[sortProp>0]);
  } 
};

//selType:검색
