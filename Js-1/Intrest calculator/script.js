const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const result = document.getElementById('result');



function simple(){
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value)/100;
    let time = Number(timeInput.value);
    
    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(time < 0 || isNaN(time)){
        time = 0;
        timeInput.value = 0;
    }

    const ans = principal * rate * time;
    result.textContent = ans.toLocaleString('en-KE', {style:"currency", currency:"KSH"});

}

function compound(){
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value)/100;
    let time = Number(timeInput.value);
    
    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(time < 0 || isNaN(time)){
        time = 0;
        timeInput.value = 0;
    }

    const ans = principal * Math.pow((1 + rate / 1), 1 * time);
    result.textContent = ans.toLocaleString('en-KE', {style:"currency", currency:"KSH"});
}