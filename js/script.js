var newTextEle;

window.onload=function() { //윈도우가 로드되면 이 펑션이 수행된다
//alert('aaaa');
console.log('bbbb'); //개발자도구의 console에 출력
var rootEle= document.getRootNode(); //루트의 노드 반환
console.log(rootEle); //->문서 주소 출력.
// let
// const 

var newDivEle=document.createElement('DIV'); //문서에 div라는 새로운 요소를 만든다
var newPEle=document.createElement('P'); //문서에 p라는 새로운 요소를 만든다
newTextEle=document.createTextNode('cccc'); //문서에 cccc라는 텍스트노드를 만든다
newPEle.appendChild(newTextEle); //p 자식이 cccc가 되도록 함
newDivEle.appendChild(newPEle); //div 자식이 p가 되도록 함
document.getElementsByTagName('BODY')[0].appendChild(newDivEle);
//문서의 첫번째 body 자식이 div 가 되도록 함
//즉 여기까지 하면 body-div-p-text 연결된 상태고, 그래서 html에 새로운 구조가 만들어져 추가된것
}

function changeText(txt) {
    newTextEle.nodeValue=txt;
    /* newTextEle의 nodevalue를 지정된 txt로 바꾼다 */
}

function removeDiv(pid) {
    var child=document.getElementBlyId(pid);
    var parent=document.getElementById(pid).parentNode;
    parent.removeChild(child);
    /*  */
}


