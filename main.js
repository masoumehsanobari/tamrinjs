


let fetchCard= async ()=>{
let html1=""
let res =await fetch("http://localhost:3004/food")
let datacard=await res.json()
datacard.forEach((elem)=>{
    html1+=`<div class="card3    ">  
                      <div class="card  w-96 shadow-xl ">
                        <figure>
                            <img src="${elem.imgsrc}" alt="" />
                        </figure>
                        <div class="rating pt-2 pl-5">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"
                                checked="checked" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div class="card-body">
                            <h2 class="card-title text-black"> ${elem.titel} </h2>
                            <div class="card-actions justify-start  ">
                                <img src="${elem.imgsrc2}" alt="" width="50px"><span
                                    class="text-black text-left pt-4">${elem.span}</span>
                                <div class="pt-4 pl-20">
                                    <div class="  badge badge-outline text-black ">${elem.nuber}</div>
                                </div>
                            </div>
                        </div>
                    </div> </div>`
})
   document.querySelector("div.card-part3").innerHTML=html1 

}
fetchCard()

let fetchCard2= async ()=>{
    let html2=""
    let res =await fetch("http://localhost:3004/food2")
    let datacard2=await res.json()
    datacard2.forEach((elem)=>{
        html2+=`<div class="card5">  
                          <div class="card  w-96 shadow-xl ">
                            <figure>
                                <img src="${elem.imgsrc3}" alt=""/>
                            </figure>
                            <div class="rating pt-2 pl-5">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"
                                    checked="checked" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div class="card-body">
                                <h2 class="card-title text-black"> ${elem.titel1} </h2>
                                <div class="card-actions justify-start  ">
                                    <img src="${elem.imgsrc4}" alt="" width="50px"><span
                                        class="text-black text-left pt-4">${elem.span2}</span>
                                    <div class="pt-4 pl-20">
                                        <div class="  badge badge-outline text-black ">${elem.nuber2}</div>
                                    </div>
                                </div>
                            </div>
                        </div> </div>`
    })
       document.querySelector("div.card-part5").innerHTML=html2 
    
    }
    fetchCard2()

//   start  axios1html
let html3=""
let getdatablog=async()=>{
    let res2=await axios.get("http://localhost:3004/food3")
   res2.data.forEach((elem3)=>{
    html3+=`
     <div class="card bg-base-100 w-96 shadow-xl  ">
         <figure>
          <img
            src="${elem3.imgsrc6}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-left text-black "> ${ elem3.p}</h2>
          <p class="text-left text-black ">${elem3.span3}</p>
        </div>

      </div>
    `
   })
   document.querySelector("div.htm1-card").innerHTML=html3
}
getdatablog()
// end  axios1html

// start axios2
let html4=""
let getdatacard5=async()=>{
    let rescard5=await axios.get("http://localhost:3004/food4")
    rescard5.data.forEach((elem4)=>{
      html4+=`
 <div class="card bg-base-100 w-96 shadow-xl  ">
                    <figure>
                        <img src="${elem4.imgsrc7}" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-center text-black "> ${elem4.h2}</h2>
                        <p class="text-center text-black ">${elem4.p2}</p>
                    </div>

                </div>
      `  
    })
    document.querySelector("div.part4-card").innerHTML=html4
}
getdatacard5()
// end axios2

// Style
$("div.top").css({
     width: "50px",
      height: "50px",
       borderRadius: "50%",
        backgroundColor: "red",
         position: "fixed",
         right: "20px",
         bottom:"20px" ,
         
})
// end styletop
// start sorol
$(document).on("scroll",function(){
    let st=$(this).scrollTop()
    if(st>1000){
        $("div.top").fadeIn(500)
    }
    else{
        $("div.top").fadeOut(500)
    }
})
$("div.top").on("click",function(){
    $("html,body").animate({
        scrollTop:"0"
    },500)
})
// end scrol