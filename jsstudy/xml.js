function () {
    let xhr = new XMLHttpRequest();
  
    xhr.open("GET", "http://172.30.1.34:9999/ajaxTest/members.xml", true);
  
    xhr.send();
  
    xhr.onreadystatechange = function () {
      //xml은 그냥 받아와도 객체가 됨
      if (xhr.readyState == 4 && xhr.status == 200) {
        let xmlObj = xhr.responseXML;
        let rootEle = xmlObj.documentElement;
        let errEle = rootEle.getElementsByTagName("error")[0];
        let codeEle = errEle.getElementsByTagName("Code")[0];
        document.getElementById("greeting").innerHTML =
          codeEle.firstChild.nodeValue;
      } //xml에서 error의 code의 첫번째의 값을 가져온다 (오류)
    }; //복잡..이래서 끌어와서 쓰러면 xml보다 json 권장
  };