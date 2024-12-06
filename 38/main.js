let x =+prompt("عدد وارد کنبد")
let y =+prompt("عدد وارد کنبد")
let operand =prompt("لطفا انتخاب کنید * - + / ** %")

if(operand==="*"){
    let mul =x*y
    document.write(`<h1>${mul}</h1>`)
    console.log(mul)
}
else if(operand==="-"){
    let sub=x-y
    document.write(`<h1>${sub}</h1>`)
    console.log(sub)
}
else if(operand==="+"){
    let sum=x+y
    document.write(`<h1>${sum}</h1>`)
    console.log(sum)
}
else if(operand==="/"){
    let div=x/y
    document.write(`<h1>${div}</h1>`)
    console.log(div)
}
else if(operand==="**"){
    let pow =x**y
    document.write(`<h1>${pow}</h1>`)
    console.log(pow)
}
else if(operand==="%"){
    let rem =x%y
    document.write(`<h1>${rem}</h1>`)
    console.log(rem)
}