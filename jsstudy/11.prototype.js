function PC() {
    name:'퍼스널컴퓨터'

}

PC.price=10000;
console.log(PC);
PC.getPrice=function() {
    return this.price;
}

console.log(PC);

const pc1=new PC();

const pc2=new PC();

pc1.price=20000;

console.log(pc1.price); //20000
console.log(pc2.price); //undefined

console.log(pc1.constructor.price); //10000
pc2.constructor.price; //10000

console.log(pc1);
console.log(pc2);

console.log();

console.log('name' in pc1); //false
console.log('prototype' in Object); //true
console.log(Reflect.has(pc1,'name'));  //false
console.log(Reflect.has(pc1,'price')); //true
console.log('prototype' in pc1); //false
console.log('prototype' in PC); //true

console.log(

);

const gum={brand:'롯데',name:'자일리톨',price:100};
console.log(Object.keys(gum)); //[ 'brand', 'name', 'price' ]
console.log(Object.values(gum)); //[ '롯데', '자일리톨', 100 ]
console.log(Object.entries(gum)); //[ [ 'brand', '롯데' ], [ 'name', '자일리톨' ], [ 'price', 100 ] ]
console.log(Object.keys[{}]); //undefined
console.log();


function Add(last,now) {this.last=last; this.now=now;}

const a1=new Add(100,10);
const a2=new Add(200,20);
console.log(a1);
console.log(a2);

const sports={};

const baseball={popul:1, man:11};

const lotte={rank:3, };

Object.setPrototypeOf(lotte,baseball);
Object.setPrototypeOf(baseball,sports);
console.log(baseball.__proto__===sports); //true
console.log(lotte.prototype);
console.log(lotte.protoytpe===Object.prototype);
console.log(baseball);
baseball.popul=2;
console.log(baseball);