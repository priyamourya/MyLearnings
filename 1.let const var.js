// there are 3 types of variable declaration 
// 1.var - older style similar to let
// 2.const -constant throught out the program 
// 3.let - block level scope, it can be redeclared
//---------------------------------------------------------------
// example of let
let age=20
let res;//allowed
age=22
res=90
console.log(age);//prints ---22
{
    let age=90
    console.log(age);// prints---90
}
console.log(age);//prints ---22

//---------------------------------------------------------------
//example of const
const birthYear=2000;
//const hello;----not allowed
// birthYear=4000;-----this will give error
console.log(birthYear);
{
    const birthYear=90
    console.log(birthYear);//this will also run and not give error
}
console.log(birthYear);//print---2000

//---------------------------------------------------------------
//example of var
var Myname=`maya`
console.log(Myname);
Myname=`jiya`
console.log(Myname);
{
    var Myname=`hello`
    console.log(Myname);
}
console.log(Myname);//this prints hello----it means that it is not restricted by the block
