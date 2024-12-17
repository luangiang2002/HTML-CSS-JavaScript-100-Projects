const open1=document.getElementById('open');
const close1=document.getElementById('close');
const modal=document.getElementById('modal');

open1.addEventListener('click',()=>modal.classList.add('show-modal'))
close1.addEventListener('click',()=>modal.classList.remove('show-modal'))

window.addEventListener('click',(e)=>{
e.target===modal?modal.classList.remove('show-modal'):false;
})