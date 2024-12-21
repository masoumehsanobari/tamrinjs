let db=[
{titeproduct:"hadphone",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/001a96c9e436fef968fb71b1a59226711e03acb0_1712072503.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"200",discount:"10%"},
{titeproduct:"appel",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1727276787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"800",discount:"40%"},
{titeproduct:"laptop",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/a92f456002e6d3d59ca13fca942a9cfb906a8a16_1709988101.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"600",discount:"20%"},
{titeproduct:"sumsung",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/37226d4563857911e01d2bc33e25a82c0b6e9df4_1726038496.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",priceproduct:"400",discount:"30%"},
{titeproduct:"mobile",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/dd458940260cd00ed0dd634eeca575f9636a76c9_1725964055.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"100",discount:"5%"},
{titeproduct:"hanzfari",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/91635a4b2bb5e8026a87760bc782e90da6e4ed51_1699263284.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"150",discount:"4%"},
{titeproduct:"mobile",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/4080a289e33e3c79fb4f99928355128721f1f39f_1726036489.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"700",discount:"50%"},
{titeproduct:"mobile3",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/4080a289e33e3c79fb4f99928355128721f1f39f_1726036489.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"200",discount:"10%"},
{titeproduct:"mobile",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/4080a289e33e3c79fb4f99928355128721f1f39f_1726036489.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"800",discount:"60%"},
{titeproduct:"laptop2",imgproduct:"https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",priceproduct:"1000",discount:"55%"},
]
let result=db.find(function(elem){
    return elem.priceproduct>=500
})
console.log(result)
let result2=db.filter(function(elem){
    return elem.priceproduct==="mobile"
})
console.log(result)
