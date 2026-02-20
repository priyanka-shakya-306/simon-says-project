let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let color = ["red","green","yellow","yellow"];
let highestScore = 0;
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("btn clicked");
        started = true;
    }

    levelUp();
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
       btn.classList.remove("gameFlash"); 
    },240);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
       btn.classList.remove("userFlash"); 
    },240);
}


function levelUp(){
    userSeq = [];
    level ++;
    h2.innerText = `Level = ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = color[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
};

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        if(level > highestScore){
            level += highestScore;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },240)
       h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start <br> your highest wcore is this`;
       reset();
    }
    
}

function keyPress(btn){
    let flashBtn = this;
    userFlash(flashBtn);
    let color = flashBtn.getAttribute("id");
    userSeq.push(color);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click",keyPress);
};

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 1;
}