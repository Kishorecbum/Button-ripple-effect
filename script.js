const btnele=document.querySelector(".btn")

btnele.addEventListener("mouseover",(event)=>{
    const x=(event.pageX- btnele.offsetLeft);
    const y=(event.pageY - btnele.offsetTop);

    btnele.style.setProperty("--xPos",x+"px")
    
    btnele.style.setProperty("--yPos",y+"px")

    
})