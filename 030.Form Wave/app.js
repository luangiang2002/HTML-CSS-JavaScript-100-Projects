const allLable=document.querySelectorAll('.form-control label');
allLable.forEach((lable)=>{
    lable.innerHTML=lable.innerHTML.split("").map((letter,index)=>
        `<span style='transition-delay:${index*50}ms '>${letter}</span>`
    )
    .join('')
})