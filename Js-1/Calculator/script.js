// Calculator app

const display = document.getElementById('display')

function calculate(){
    display.value = eval(display.value);
}

function displayInput(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function clearPrevious(){
    display.value = display.value.slice(0, -1);
}