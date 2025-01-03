const proress= document.getElementById('proress');
const prev= document.getElementById('prev');

const next= document.getElementById('next');

const circle= document.querySelectorAll('.circle');

let activeIndex=1;
next.addEventListener('click',()=>{
    activeIndex++;
    if(activeIndex>circle.length){
        activeIndex=circle.length;

    }
    updateUI();
})
prev.addEventListener('click',()=>{
    activeIndex--;
    if(activeIndex<1){
        activeIndex=1;

    }
    updateUI();
})

function updateUI(){
    circle.forEach((circle,index)=>{
        if(index<activeIndex){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active');
    proress.style.width=
    ((actives.length-1)/(circle.length-1)) *100+'%';
    if(activeIndex===1){
        prev.disabled==true;
    }
    else if(activeIndex===circle.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false

    }
}