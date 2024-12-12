const btn=document.querySelector('.emoji')

const emojis=[
    '🙂 ',
     '😀 ',
      '😅 ',
       ' 🤣 ',
    , ' 😊 ',
     ' ☺️ ',
      ' 😌 ',
     ' 😉 ',
      ' 😍 ',
     ' 😘 ',
     ' 😗I',
     ' 😳',

]
btn.addEventListener('mouseover',()=>{
    btn.innerHTML=emojis[Math.floor(Math.random()*emojis.length)]
}

)