const shareBtn=document.querySelector(".share button");
shareBtn.addEventListener("click",()=>{
    if(shareBtn.classList.contains('active')){
        shareBtn.classList.remove('active')
    }
    else{
        shareBtn.classList.add('active')
    }
})