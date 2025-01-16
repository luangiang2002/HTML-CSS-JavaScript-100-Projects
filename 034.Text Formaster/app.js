let inputField= document.getElementById('input-field')
let outputField=document.getElementById('output-field')
let button=document.querySelectorAll('button')
inputField.addEventListener('keyup',()=>outputField.innerHTML=inputField.value)

button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('uppercase')){
            outputField.innerHTML=outputField.innerHTML.toUpperCase()
        }else if(btn.classList.contains('underline')){
            outputField.style.textDecoration='underline'
        }else if(btn.classList.contains('capitalize')){
            outputField.innerHTML=outputField.innerHTML.charAt(0).toUpperCase()+outputField.innerHTML.slice(1).toLowerCase()
        }else if(btn.classList.contains('bold')){
            outputField.style.fontWeight='900'
        }
        else if(btn.classList.contains('italic')){
            outputField.style.fontStyle='italic'
        }
        else {
            outputField.innerHTML=outputField.innerHTML.toLowerCase()
        }
    });
})