console.log(juice(8,4));//you can have hositing in function 
function cutFruitPieces(fruit){
    return fruit *2;
}
function juice(apple,oranges){
    const applePieces=cutFruitPieces(apple);
    const orangePieces=cutFruitPieces(oranges);
    return `this is a juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces`;
}

const hava=(obj1,obj2)=>{
    return obj1+obj2;
}

const h=(hava(9,80));//cannot have hoisting in this type of function declaration.
console.log(h);
console.log(juice(8,4));