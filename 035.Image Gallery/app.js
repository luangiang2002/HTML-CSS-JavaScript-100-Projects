let image=document.querySelectorAll('img')
let wapper=document.getElementById('wrapper')
let imgWapper=document.getElementById('fullImg')
let closes=document.querySelector('span')
console.log(image,wapper,imgWapper,closes);

image.forEach((img,index)=>{
    img.addEventListener('click',()=>{
            openModal(`Image/Img${index}.jpg`)
        })
    })

closes.addEventListener('click',()=>(wapper.style.display='none'))

function openModal(pic){
    wapper.style.display='flex'
    imgWapper.src=pic
}