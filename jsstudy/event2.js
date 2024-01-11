const outer=document.querySelector('#outer');
const inner=document.querySelector('#inner');
const btn=document.querySelector('#btn');

outer.addEventListener('click',function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}, true); 
//이거 누르면 타겟은 outer, currentTarget은 outer, eventPhase는 2

inner.addEventListener('click',function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
}); //이거 누르면 타겟은 계속 inner, currentTarget은 outer->inner, eventPhase는 1->2

btn.addEventListener('click',function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.eventPhase);
    // e.stopPropagation(); //더이상 전파하지 않음 -> 타겟은 계속 클릭, currentTarget은 outer->button, eventPhase는 1-2.
    //즉 버블링 중지.
    //또 outer에 true 넣으면 
    // 타겟은 계속 버튼, currentTarget은 outer->button->inner, eventPhase는 1->2->3
    //true 빼면 타겟은 계속 버튼, currentTarget은 button->inner->outer, eventPhase는 2 3 3
}); 

const aEle=document.querySelector('a');
aEle.addEventListener('click',function(e) {
    e.preventDefault(); //이렇게 막아놓으면 a눌러도 a의 링크인 google로 이동하지 않음
});