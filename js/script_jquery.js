$(function() {
    $("#btn1").click(function(){
        $(this).val('value를 jquery로 변경');
        /* 이러면 버튼에 써져 있던 '글자변경'이 
        'value를 jquery로 변경'으로 변경됨 */
    });
});