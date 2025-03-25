let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");

const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

resetBtn.addEventListener("click",()=>{
    userScore =0;
    compScore =0;
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    result.innerText="Play you move";
    result.style.backgroundColor="#fff";
    result.style.color="black";
    result.style.border="1px solid";
})

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        console.log("You win!");
        userScore++;
        userScorePara.innerText=userScore;
        result.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor="green";
        result.style.color="white";
        result.style.border="none";
    } 
    else{
        console.log("You lose")
        compScore++;
        compScorePara.innerText=compScore;
        result.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor="red";
        result.style.color="white";
        result.style.border="none";
    }        
}

const playGame = (userChoice)=>{
    console.log("User choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice===compChoice){
        console.log("Game was Draw.");
        result.innerText="Game was Draw. Play again";
        result.style.backgroundColor="#fff";
        result.style.color="black";
        result.style.border="1px solid";
    } 
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissor"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})