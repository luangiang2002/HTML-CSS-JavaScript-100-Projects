const slide=document.querySelectorAll('.side')

slide.forEach((slide)=>{
    slide.addEventListener('click',()=>{
        removeCurrentActives();
        slide.classList.add('active')
    })
})

function removeCurrentActives(){
    slide.forEach((slide)=>{
        slide.classList.remove('active')
    })
}