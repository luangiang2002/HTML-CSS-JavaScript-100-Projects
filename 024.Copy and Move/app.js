const copyText=document.querySelector('textarea[name=copyTxt]')
const finalTxt=document.querySelector('textarea[name=finalTxt]')

const moverBtn=document.querySelector('.moverBtn')
const coppyBtn=document.querySelector('.coppyBtn')

const output=document.querySelector('.output')
coppyBtn.addEventListener('click',()=>{
    let temp=copyText.value;
    copyClipBoard(temp)
})
moverBtn.addEventListener('click',()=>{
    let temp=copyText.value;
    finalTxt.value=temp
})
copyText.addEventListener('click', function() { this.select(); });
finalTxt.addEventListener('click', function() { this.select(); });

function copyClipBoard(str) {
    navigator.clipboard.writeText(str)
        .then(() => {
            // Hiển thị thông báo khi sao chép thành công
            output.innerHTML = `<h3>Content Copied</h3>`;
            output.classList.add('added');
            setTimeout(() => {
                output.classList.toggle('added');
                output.textContent = '';
            }, 2000);
        })
        .catch(err => {
            // Xử lý lỗi nếu không sao chép được
            console.error('Clipboard copy failed', err);
        });
}
