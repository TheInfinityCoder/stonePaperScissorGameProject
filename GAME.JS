alert("WELCOME TO THE STONE_PAPER_SCISSOR-GAME");
alert("THIS GAME IS DEVELOPED BY ADITYA PANDEY");
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let win = document.querySelector(".win");
let user_Score= document.querySelector("#user_Score");
let comp_Score= document.querySelector("#comp_Score");


const genCompChoice = () => {
    const options = ["paper","stone","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("compchoice =", compChoice);

    if(userChoice === compChoice){
        console.log("ITS A DRAW");
    win.innerHTML ="ITS A DRAW";
    win.style.background = "black";
    }
    
    else{
        if(userChoice === "stone" && compChoice === "scissor"){
            console.log("YOU WON");
        win.innerHTML ="YOU WON!";
        win.style.background = "green";
        userScore++;
        user_Score.innerHTML = userScore;
        }
        else if(userChoice === "scissor" && compChoice === "paper"){
            console.log("YOU WON");
        win.innerHTML ="YOU WON!";
        win.style.background = "green";
        userScore++;
        user_Score.innerHTML = userScore;
        }
        else if(userChoice === "paper" && compChoice === "stone"){
            console.log("YOU WIN");
        win.innerHTML ="YOU WON!";
        win.style.background = "green";
        userScore++;
        user_Score.innerHTML = userScore;
        }
        else if(userChoice === "stone" && compChoice === "paper"){
            console.log("YOU LOST");
        win.innerHTML ="YOU LOST";
        win.style.background = "red";
        compScore++;
        comp_Score.innerHTML = compScore;
        }
        else if(userChoice === "paper" && compChoice === "scissor"){
            console.log("YOU LOST");
        win.innerHTML ="YOU LOST";
        win.style.background = "red";    
        compScore++;
        comp_Score.innerHTML = compScore;
        }
        else if(userChoice === "scissor" && compChoice === "stone"){
            console.log("YOU LOST");
        win.innerHTML ="YOU LOST";
        win.style.background = "red";
        compScore++;
        comp_Score.innerHTML = compScore;
        }
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
});
});