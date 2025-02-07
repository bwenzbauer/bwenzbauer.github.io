let dataValue = [];

function add() {
    const input = document.getElementById('input').value;
    const num = Number(input);
    if (isNaN(num) || input === '') {
        alert("Invalid Entry");
        return;
    }
    dataValue.push(num);
    document.getElementById('input').value = '';
    printArray();
}

function remove() {
    const input = document.getElementById('input').value;
    const num = Number(input);
    if (isNaN(num) || input === '') {
        alert("Invalid Entry");
        return;
    }
    const inputIndex = dataValue.indexOf(num);
    if (inputIndex === -1) {
    alert("Invalid Number");
    return;
    }
    dataValue.splice(inputIndex, 1);
    document.getElementById('input').value = '';
    printArray();
}

function printArray() {
    document.getElementById('dataset').textContent = dataValue.join(', ');
    printMean();
}

printArray();

function meanCalculate() {
if (dataValue.length === 0) {
    return 0;
}
let sum = 0;
for (let i = 0; i < dataValue.length; i++) {
    sum += dataValue[i];
}
let mean = sum / dataValue.length;
return mean;
}

function printMean() {
    const mean = meanCalculate();
    document.getElementById('mean').innerText = "Mean: " + mean;
}