const arr = [1, 3, 2, 5, 4];
console.log(arr);

const arrsort = arr.sort(function (a, b) {return b - a;});
console.log(arrsort);    //sort : b-a : 내림차순 정렬

const arrsort2 = arr.sort(function (a, b) {return a - b;});
console.log(arrsort);    //sort : a-b : 오름차순 정렬

const arr2x=arr.map(function(ele) {return ele*2;});
console.log(arr2x);

const arrli6=arr2x.filter(function(ele) {return ele<6;});
console.log(arrli6);

const arrsum=arr.reduce(function(a,b){return a+b;}, 0);
console.log(arrsum);

const arr2=[1,2,3,4,5];
console.log(arr2.sort(function(a,b){return b-a;})
.map(function(ele){return ele**2;})
.filter(function(ele){return ele>10;})
.reduce(function(a,b){return a+b;},0)
);

const arr3=[1,2,3,4,5];
console.log(arr3.sort((a,b)=>b-a)
.map(ele=> ele**2)
.filter(ele=>ele>10)
.reduce((a,b)=>a+b,0)
);


const arr4=['a','b','c','d','e'];
console.log(arr4.sort((a,b)=>b.charCodeAt()-a.charCodeAt()));

const arr5=['a','b','c','d','e']; //a=97
console.log(arr5.map(ele=>ele.charCodeAt()-64));


//a bb ccc dddd eeeee
const arr6=['a','b','c','d','e'];
console.log(arr6.map((ele,index)=>ele.repeat(index+1),0));
   //ㅇ


// a b c d e 를 마 라 다 나 가 로 변경
const arr7=['a','b','c','d','e'];
const arr71=arr7.sort((a,b)=>b.charCodeAt()-a.charCodeAt()) 
// e d c b a : 101 100 99 98 97

.map(ele=>ele.charCodeAt()+47459);
// 47560 47559 47558 47557 47556 

function a() {
        for(let i=0; i<=4; i++) { 
            if(i===0) {continue;} // 0 : 47560
            else if (i%2==0)  {
                    arr71[i]=arr71[i-1]-588*2;}
            else {arr71[i]=arr71[i-1]-588;}
             }
    };

a();
console.log(arr71);

// const arr72=arr71.map(ele=>);

// console.log(arr72);
/*   
console.log('가'.charCodeAt());   44032        4
                                        1176
console.log('나'.charCodeAt()); //45208        3
                                        588
console.log('다'.charCodeAt()); //45796        2 
                                        1176
console.log('라'.charCodeAt()); //46972        1
                                        588
console.log('마'.charCodeAt()); //47560        0  */

const arr8=['a','b','c','d','e'];
console.log(arr8.map(ele=>ele.charCodeAt())
    .reduce((a,b)=>a+b,0)); //495



