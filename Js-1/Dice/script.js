// Dice programme

function roll(){
    const diceNumber = document.getElementById('diceNumber').value;
    const resultNumber = document.getElementById('resultNumber');
    const resultImage = document.getElementById('resultImage');
    const values = [];
    const images = [];

    for (let i = 0; i < diceNumber; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }
    resultNumber.textContent = `Dice: ${values.join(', ')}`;
    resultImage.innerHTML = images.join('');
}