const f1='halva'
const f2='puri'
const f3='kheer'
// but using array is easier
const fd=['halva','puri','kheer']
console.log(fd[0],fd[1],fd[2]);

//method 2:
const f=new Array('halva','puri','kheer');
console.log(f);
f[0]='vegetable'
console.log(f);// DON'T you think that it is contradictor because const is not permutable....
//no beacuse we are not changing the whole but just changiing insider value;
f[3]='kk'// this is also allowed ....
console.log(`${f} ${f.length}`);