let btn = document.querySelector("button#btn")
let photo=document.querySelector("div#photo")

btn.addEventListener("click", getData)


function getData(){
    let xml=new XMLHttpRequest()
    let html=""
    xml.open("get","https://jsonplaceholder.typicode.com/photos")
    xml.responseType="json"
    xml.onload=()=>{
        xml.response.forEach((elem)=>{
html+=`
<div class="photoes">
<h1>${elem.id}</h1>
<h4>${elem.title}</h4>
<img src="${elem.url}" alt="${elem.title}" />
<img src="${elem.thumbnailUrl}" alt="${elem.title}" />
</div>
`
        })
        document.getElementById("photo").innerHTML=html
    }
xml.onerror=()=>{
    console.log("error");
}
xml.send(null);
}