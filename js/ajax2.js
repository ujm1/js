let btn = document.getElementById("btn");
btn.onclick = function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "http://apis.data.go.kr/B552881/kmooc/courseList?ServiceKey=4gR71apRDg8GVICvWEroWtz742kI5hfaig2CICFs8RNs3QATxfK%2Ff1GtAKlJ6FM9kJw%2F9y3tbDFuOe7a%2FSzuiQ%3D%3D&page=1", true);

  xhr.send();

  xhr.onreadystatechange = function () {
   
    if (xhr.readyState == 4 && xhr.status == 200) {
        let jsonStr=xhr.responseText;
        const jsonObj=JSON.parse(jsonStr);
      document.getElementById("content").innerHTML =
        jsonObj.pagination.next; //2433 정상 출력
    }
  };
};