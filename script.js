let choices=document.querySelectorAll(".choose")
let Userscore=0;
let Compscore=0;
let user=document.querySelector("#user")
let Comp=document.querySelector("#comp")
let msg=document.querySelector(".move")
const compchoice=()=>{
    let idx=Math.floor(Math.random()*3)
    let options=["Snake","Water","Gun"]
    return  options[idx];
}
const winner=(userchance,userchoice,comp)=>{
    if(userchance){
        Userscore++;
        user.innerText=Userscore;
      msg.innerText=`You win! Your ${userchoice} beats ${comp}`;
      msg.style.background="#08B2E3";
    }
    else{
        Compscore++;
        Comp.innerText=Compscore;
       msg.innerText=`You lose! ${comp} your beats ${userchoice}`
       msg.style.background="#EE6352"
    }
}
const game=(userchoice)=>{
    let comp=compchoice()

    if(userchoice==comp){
        msg.innerText="Game is draw";
        msg.style.background="#57A773"
    }
    else{
        let userchance=true;
        if(userchoice=="Snake"){
            userchance=comp=="Water"? true:false;
        }
      else if(userchoice=="Water"){
            userchance=comp=="Gun"? true:false;
        }
        else{
            userchance=comp=="Snake"? true:false;
        }
        winner(userchance,userchoice,comp)
    }
}
// let i=0;
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
   let userchoice= choice.getAttribute("id");
   game(userchoice)
   })
})