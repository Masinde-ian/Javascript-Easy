const countLabel = document.getElementById('countLabel')
const reduce = document.getElementById('decreaseBtn')
const reset = document.getElementById('resetBtn')
const increase = document.getElementById('increaseBtn')

let count=0;

increase.onclick = function() {
    count++;
    countLabel.textContent = count;
}
reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
reduce.onclick = function() {
    count--;
    countLabel.textContent = count;
}