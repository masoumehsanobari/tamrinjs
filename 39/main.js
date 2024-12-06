function checkoperand(){

let x = +prompt("عدد وارد کنبد")
let y = +prompt("عدد وارد کنبد")
let operand = prompt("لطفا انتخاب کنید * - + / ** %")
switch (operand) {
case "*":{
let mul =x*y
console.log(mul);
break;
}
case "-":{
    let sub=x-y
    console.log(sub);
    break;
}
case "+":{
    let sum=x+y
    console.log(sum);
    break;
}
case "/":{
    let div=x/y
    console.log(div);
    break;
}
case "**":{
    let pow =x**y
    console.log(pow);
    break;
}
case "%":{
    let rem =x%y
    console.log(rem);
    break;
}
default:{
    console.log("اشتباهههههههه")
    break;
}
}
}