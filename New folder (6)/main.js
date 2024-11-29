let firstname =prompt("اسمت وارد کن")
let lastname= prompt("نام خانوادگی تو وارد کن")
let age=prompt("سنت وارد کن")
let fathername=prompt("نام پدرت؟")
document.querySelector("div#root").innerHTML=`<h1> نام:${firstname}</h1><h2> نام خانوادگی:${lastname}</h2><h3> سن:${age}</h3><h4> نام پدر:${fathername}</h4>`
console.log(`my firstname is ${firstname}`);
console.log(`my lastname is ${lastname}`);
console.log(`my age is ${age}`);
console.log(`my fathername is ${fathername}`);


