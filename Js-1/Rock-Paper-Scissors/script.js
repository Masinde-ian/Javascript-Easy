const choices = ['Rock','Paper','Scissors'];
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let score1 = 0;
let score2 = 0;

function gameOn(player){

    const computer = choices[Math.floor(Math.random() * 3)];
    let answer = "";

    if(player == computer){
        answer = "It's A Tie"
    }
    else{
        switch (player){
            case "Rock":
                answer = (computer === "Scissors") ? "Your the WINNER" : "Your the LOOSER";
                break;
            case "Paper":
                answer = (computer === "Rock") ? "Your the WINNER" : "Your the LOOSER";
                break;
            case "Scissors":
                answer = (computer === "Paper") ? "Your the WINNER" : "Your the LOOSER";
                break;
        }
    }
    result.classList.remove('win','lose')
    switch (answer){
        case "Your the WINNER":
            result.classList.add('win');
            score1++;
            playerScore.textContent = score1;
            break;
        case "Your the LOOSER":
            result.classList.add('lose');
            score2++;
            computerScore.textContent = score2;
            break;
    }
    result.textContent = answer
    player1.textContent = `PLAYER: ${player}`
    player2.textContent = `COMP: ${computer}`

    

    

}
