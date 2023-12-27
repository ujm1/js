$(function() {
 
    $("#load").on("click", function() {
        $("#result").load("http://172.30.1.34:5500/web/xml/books.xml", 
        /*하라리 100 세이건 200 제러드 30000 화면에
        즉 저 링크에서 가져온 것 */
        function(responseText, textStatus, jqXHR) {
            console.log(responseText); 
            /* 
            <?xml version="1.0" encoding="utf8"?>
<books><book>
        <title>사피엔스</title>
        <author>하라리</author>
        <price>10000</price>
        </book>
        
        <book>
        <title>코스모스</title>
        <author>칼세이건</author>
        <price>20000</price>
        </book>
        
        <book>
        <title>총,균,쇠</title>
        <author>제러드</author>
        <price>30000</price>
        </book>
</books>
출력
*/
            console.log(textStatus); //success 출력
            for (prop in jqXHR) {
                console.log(`${prop} : ${jqXHR[prop]}`);
            } //모든 정보 출력

            console.log(jqXHR.readyState); /*현 상태(숫자) : 4 출력
            즉 위의 prop의 모든 정보 중 readyState만 가져온것 */
            
            console.log(jqXHR.catch); 
        }); 
        


    });

    $("#get").on("click", function() {



    });

    $("#post").on("click", function() {



    });







});