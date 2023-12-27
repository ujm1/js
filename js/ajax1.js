let btn = document.getElementById("btn");
btn.onclick = function () {
  /* xhr 객체(통신 객체) 생성 */
  let xhr = new XMLHttpRequest();

  /* xhr 객체 초기화=통신 초기화 */
  xhr.open("GET", "http://172.30.1.10:5500/asset/plaintext.txt", true); //비동기:true

  xhr.send();

  /* callback 처리
onreadystatechange: xhr의 이벤트속성(콜백 함수 저장)
readyState : xhr의 상태 코드(0~4), 즉 클라이엉ㄴ트의 요청 상태
status:서버의 응답 상태 코드 (200,403,404,500) 
statusText: 서버의 응답 상태 문자열(ok forbidden, not found, ...*/
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("greeting").innerHTML = xhr.responseText;
      /* AJAX요청 -> 버튼 누르면 -> txt파일에 써져 있는
        AJAX 응답 성공으로 변경됨 */
    }
  };
};

let btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "http://172.30.1.10:5500/asset/csv.csv", true);

  xhr.send();

  xhr.onreadystatechange = function () {
    const respArray = xhr.responseText.split(",");
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("greeting").innerHTML =
        xhr.responseText + " 그리고 " + respArray[0];
    }
  };
};

let btn3 = document.getElementById("btn3");
btn3.onclick = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "http://172.30.1.10:5500/asset/json.json", true);
  //객체 가져옴
  xhr.send();

  xhr.onreadystatechange = function () {
    const jsonObj = JSON.parse(xhr.responseText); //가져와서 문자열이 된 객체를
    //다시 객체로 역직렬화(파싱)
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("greeting").innerHTML = jsonObj.student.sname;
    } //greeting이 json의 student의 sname인 홍길동으로 변경
  };
};

let btn4 = document.getElementById("btn4");
btn4.onclick = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://koreanjson.com/users/1", true);

  xhr.send();

  xhr.onreadystatechange = function () {
    const jsonObj = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("greeting").innerHTML = jsonObj.name;
    }
  };
};

let btn5 = document.getElementById("btn5");
btn5.onclick = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.dbpia.co.kr/v2/search/search.xml", true);

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
