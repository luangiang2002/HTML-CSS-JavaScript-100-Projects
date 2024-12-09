const cursor=document.querySelector('.cursor');


document.addEventListener('mousemove',function(event){
    console.log(event);
    moveCursor(event.pageX,event.pageY);
});

const moveCursor=function(pageX,pageY){
    cursor.style.left=pageX+'px';
    cursor.style.top=pageY+'px';
}