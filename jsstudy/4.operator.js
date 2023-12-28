console.log(+'100', typeof(+'100'));
console.log(+'백', typeof(+'백'));
console.log(+false, typeof(+false));
console.log(1+null, typeof(1+null));
console.log(1=='1');
console.log(1==='1');
console.log([]==false);
console.log(NaN==NaN);
console.log(NaN===NaN);
console.log(0==-0);
console.log(0===-0);
console.log(Number.isNaN(1+undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0,-0));
console.log((-2)**3);
console.log(Math.pow(12,2));

const obj={
    name:'홍길동',
    age:30,
    address:'지구 어딘가'
};
delete obj.address;
console.log(obj.address);
for(key in obj) {
    console.log(`${key}, ${obj[key]}`);
}
obj.hobby=['낚시','등산'];
console.log(obj.hobby);