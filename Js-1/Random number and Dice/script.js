// RANDOM NUMBER GENERATOR

const rangeBtn = document.getElementById("rangeBtn");
const randomBtn = document.getElementById("randomBtn");
const diceBtn = document.getElementById("diceBtn");
const rangeLabel = document.getElementById("rangeLabel");
const randomLabel1 = document.getElementById("randomLabel1");
const randomLabel2 = document.getElementById("randomLabel2");
const randomLabel3 = document.getElementById("randomLabel3");
const diceLabel1 = document.getElementById("diceLabel1");
const diceLabel2 = document.getElementById("diceLabel2");
const diceLabel3 = document.getElementById("diceLabel3");
const min = 1;
const max = 6;
let range;
let randomNum1;
let randomNum2;
let randomNum3;
let diceNum1;
let diceNum2;
let diceNum3;

diceBtn.onclick = function(){
    diceNum1 = Math.floor(Math.random() * max) + min;
    diceNum2 = Math.floor(Math.random() * max) + min;
    diceNum3 = Math.floor(Math.random() * max) + min;
    diceLabel1.textContent = diceNum1;
    diceLabel2.textContent = diceNum2;
    diceLabel3.textContent = diceNum3;
}
rangeBtn.onclick = function(){
    range = Math.floor(Math.random() * 100) + 1;
    // range = Math.floor(Math.random());
    rangeLabel.textContent = range;
}
randomBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * range) + min;
    randomNum2 = Math.floor(Math.random() * range) + min;
    randomNum3 = Math.floor(Math.random() * range) + min;
    randomLabel1.textContent = randomNum1;
    randomLabel2.textContent = randomNum2;
    randomLabel3.textContent = randomNum3;
}