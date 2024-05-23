let ok=document.querySelectorAll(".box");
let ss=document.querySelector("#Reset-Button");


let kk=document.querySelector(".msg-container");
let bb=document.querySelector("#msg");
let gg=document.querySelector("#newgame-btn");


let  turnO=true;
let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
ok.forEach((box) => {
    box.addEventListener("click",()=>{
       console.log("box was clicked");
       if(turnO === true){
           turnO=false;
           box.innerText="O"
           
        //   box.disabled=true;

       }else{
        turnO=true;
        box.innerText="X";
        // box.disabled=true;
        
       }
       box.disabled=true;
       
      
       winPattern();
       
      
    
    });
    
});

// to chek the winner
let winPattern=()=>{
    for(const pattern of arr){
       
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //    console.log(ok[pattern[0]].innerText,ok[pattern[1]].innerText,ok[pattern[2]].innerText);
    let val0=ok[pattern[0]].innerText;
    let val1=ok[pattern[1]].innerText;
    let val2=ok[pattern[2]].innerText;
    if(val0 !== "" && val1 !== "" && val2 !==""){
        if(val0===val1 && val1===val2){
            console.log("winner",val0);
            
            disabledBoxes();
         printWinningMsg(val0) ;  
        //  disabledBoxes();
        }
       
    }
    }
  
}
//after winner we need to pint winner msg right
let printWinningMsg=(winner)=>{
    bb.innerText=`You Are The Winner This Game ${winner}  `;
    kk.classList.remove("hide");
   
}

// all bodes disabled
let disabledBoxes=()=>{
    for(let boxes of ok){
        boxes.disabled=true;
    }
}
// gamereset 
let gamereset=()=>{
    let  turnO=true;
    enabledBoxes();
    kk.classList.add("hide");


}
// enabled 
let enabledBoxes=()=>{
    for(let boxes of ok){
        boxes.disabled=false;
        boxes.innerHTML="";

    }
}
gg.addEventListener("click",gamereset);
ss.addEventListener("click",gamereset)