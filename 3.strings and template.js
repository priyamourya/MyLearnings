//concatination of the string can be done by using either + sign 
//or by using ${} variable inside it with the back tick
const MyName="Riya";
const birthYear=1909;
const curr=2022;
//method one
console.log("Hello I'm"+" "+MyName+" and my age is "+(curr-birthYear));//() before cuur and dob is mandetory
//method two
const ans=`Hello I'm ${MyName} and my age is ${curr-birthYear}`;//--this is better
console.log(ans);
