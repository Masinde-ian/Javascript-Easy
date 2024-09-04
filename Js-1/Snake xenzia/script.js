const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gameWidth = canvas.width;
const gameHeight = canvas.height;
const scoreText = document.querySelector("#points");
const resetBtn = document.querySelector("#btn");
const canvasColor = "black";
const snakeColor = "blue";
const foodColor = "red";
const unitSize = 10;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let speed = 210;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
canvas.addEventListener("click", game);

const hard = document.getElementById('hard');
const normal = document.getElementById('normal');
const easy = document.getElementById('easy');

if(hard.checked){
    speed = 70;
}
else if(normal.checked){
    speed = 140;
}
else{
    speed = 210;
}


function game(){
    running= true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, speed);
    }
    else{
        displayGameOver();
    }
};

function clearBoard(){
    ctx.fillStyle = canvasColor;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function createFood(){
    function randomFood(min, max){
        const randNum = Math.floor((Math.random() * (max - min) + min) / unitSize) * unitSize;
        result = Math.abs(randNum)
        return result
        
    }
    foodX = randomFood(0, gameWidth);
    foodY = randomFood(0, gameHeight);
};

function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity};

    snake.unshift(head);
    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
    score+=1;
    scoreText.textContent = score;
    createFood();
    }
    else{
    snake.pop();
    }      
};

function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};

function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = 'white';
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};

function changeDirection(event){
    event.preventDefault();
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
                running = false;
                break;
    }
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

function displayGameOver(){
    ctx.font = "40px Franklin Gothic Medium";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("!! GAME OVER !!", gameWidth / 2, gameHeight / 2);
    running = false;
};

function resetGame(event){
    score = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ]
    xVelocity = unitSize;
    yVelocity = 0;
    game();               
};