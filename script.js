var timerstart=(event)=>{
    return()=>{
      
    let paragraph=document.getElementById("para");
        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
            setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                 setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                    setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                            setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                                setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                                    setTimeout(() => {
        paragraph.textContent="Happy New Year";
                                        
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                 }, 1000);   
                }, 1000);
            }, 1000);
        }, 1000);    
        }, 1000);
  
    }
}

let timer=document.getElementById("buttontimer")
console.log("timer on");
timer.addEventListener("click",timerstart());