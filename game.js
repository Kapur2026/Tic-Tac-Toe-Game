let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg");
let winningMsg=document.querySelector("#msg");

let turnO=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    // console.log("clicked!");
    if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
   });
});

const checkWinner=()=>{
    for( let pattern of winPattern){
        let post0val=boxes[pattern[0]].innerText;
        let post1val=boxes[pattern[1]].innerText;
        let post2val=boxes[pattern[2]].innerText;

        if(post0val!="" && post1val!="" && post2val!=""){
            if(post0val===post1val && post1val===post2val){
                // console.log(" Congraculation,winner is:",post0val);
                showWinner(post0val);
            }
        }
    }
};

const showWinner=(winner)=>{
    winningMsg.innerText=`Congraculation,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disable();
};

const disable=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};

const enable=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
turnO=true;
enable();
msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);