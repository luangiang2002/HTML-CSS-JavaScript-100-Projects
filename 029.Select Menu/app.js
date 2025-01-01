let selectField= document.getElementById('selectField')
let selecText=document.querySelector('.selecText')
let List=document.getElementById('list')
let ArrowIcon=document.getElementById('arrowIcon')
let options=document.querySelectorAll('.options')

selectField.addEventListener('click',()=>{
    List.classList.toggle('hide');
    ArrowIcon.classList.toggle('rotate')
});

for( const  option of options){
    option.onclick=function(){
        selecText.innerHTML=this.textContent;
        List.classList.toggle('hide');
        ArrowIcon.classList.toggle('rotate');
    }
}