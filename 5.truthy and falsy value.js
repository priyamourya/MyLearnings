// falsy values are values that will be converted into false when changed to Boolean
//There are only 5 falsy values in javascript
// they are--->
//0,'',undefined ,null ,NaN
//every thing else is true...
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

console.log(Boolean("hello"));
console.log(Boolean("world"));
//when using logical operator coversion is done to Boolean

let height;// problem when height is zero
if(height){
    console.log("yyeessss");
}else{
    console.log("this is undefined")
}