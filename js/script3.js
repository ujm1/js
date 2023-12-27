var a=0;

window.onload=function() {
    var btn1=document.getElementById("btn1");
    var ul; /* 계속 쓸건데 함수 안에서 선언하면 지역변수되어서
    다른 함수에서 못쓰니까 */
    var cnt=0;
    var outer=document.getElementById("outer");
    
    btn1.onclick=function() {

    ul=document.createElement("UL");
    var ulid=document.createAttribute("ID");
    ul.setAttribute(ulid.nodeName, "id"+ ++cnt);
        /* 버튼 누르면 ul만들고, ul에 id라는 속성 만들고,
        id의 속성을 1, 2, 3...씩 높여 설정한다. */
    var li1=document.createElement("LI");
    var li1txt=document.createTextNode("사과");
    var li2=document.createElement("LI");
    var li2txt=document.createTextNode("딸기");
    var li3=document.createElement("LI");
    var li3txt=document.createTextNode("복숭아");

    li1.appendChild(li1txt);
    li2.appendChild(li2txt);
    li3.appendChild(li3txt);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    outer.appendChild(ul);
    /* outer-ul-li-litxt 구조 생성됨 */
    }

    btn2.onclick=function() {
        if(cnt>0) {
        var ele=document.getElementById("id"+cnt);
        outer.removeChild(ele);
        cnt--;
        }
        /* var ullast=ul.parentNode.lastChild; */
          /* ul.parentNode.removeChild(ul); */
        /* ul.parentNode.removeChild(ullast); */

          /* ul의 부모 노드(outer)에서 자식(ul) 삭제
        자식이 부모 죽일 순 없고 이렇게 부모 소환해서
        자식 삭제해야 한다 */
    }
}