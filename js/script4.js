window.onload=function() {
  
    var xhr=new XMLHttpRequest();
      /* js 통신 객체 생성 */

    xhr.open("GET","http://172.30.1.10:5500/xml/books.xml", false);
/* 비동기 true 동기 false */
    
    xhr.send(); /* 요청 전송 */

    var response = xhr.responseXML;
    /* xml 응답 받기 . xml로 요청했으니 응답도 xml로 */
    var rootEle=response.documentElement;
    var  childcnt=rootEle.childNodes.length;

    for (var i=0; i<childcnt; i++) {
       var eachObj= rootEle.childNodes[i];
       if(eachObj.nodeType==1) {
        var eachObjLeng=eachObj.childNodes.length;
        for(var j=0; j<eachObjLeng; j++) {
            if(eachObj.childNodes[j].nodeType==1)
            {console.log(eachObj.childNodes[j].nodeName);
                console.log(eachObj.childNodes[j].childNodes[0].nodeValue);
            }
        }
        
       }

    }

  
}