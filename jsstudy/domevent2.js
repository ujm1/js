// $(function () {

//     $('#btn1').on('click',function() {
//         $('#result').text($(this).val());
// //또는 this.attr('value')
//     });
// });
$(function () {
  $('.btn').on('click', function () {
    $('#result').text($(this).val() + '출력됨');
  });
});
