// == does type coversion thus '18' is equal to 18(loose)
const age=18;
let myage='18';
if(age==myage){
    console.log("yes its 18")
}else{
    console.log("sorry not 18")
}
// === does type coversion thus '18' is equal to 18(strict)
const Age=18;

let Myage='18';
if(Age===Myage){
    console.log("yes its 18")
}else{
    console.log("sorry not 18")
}