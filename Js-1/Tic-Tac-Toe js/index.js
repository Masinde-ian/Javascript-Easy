const cell = document.querySelectorAll('.cell');
const restart = document.querySelector('#restart');
const statusText = document.querySelector('#statusText');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let Player = "X";
let running = false;

startGame();

function startGame(){
    running = true;
    cell.forEach(cell => cell.addEventListener("click", clickCell));
    restart.addEventListener("click", restartGame);
    statusText.textContent =  `${Player}'s turn`;
}

function clickCell(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWin();
}

function updateCell(cell, cellIndex){
    options[cellIndex] = Player;
    cell.textContent = Player;
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cell.forEach(cell => cell.textContent = "");
    running = true;
}

function checkWin(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${Player} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

function changePlayer(){
    Player = (Player == "X") ? "O" : "X";
    statusText.textContent = `${Player}'s turn`;
}