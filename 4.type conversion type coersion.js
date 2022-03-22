// type conversion means that you are force fully converting 
// from one type to another 
// but type coercion means that your javascript is
// itself converting from one type to another 
// conversion is manual conversion
// coversion is when js automatically does this
console.log(18+"32");
console.log(18+Number("89"));
console.log(19+String(900));
console.log(typeof NaN)


//this is a coersion...only in +all number converted to String
console.log("hello "+ "i am "+89)
console.log('23'*'0');
console.log('23'>'0');