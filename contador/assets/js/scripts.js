var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0

if (currentNumber >= 10) {
    document.getElementsByName("adicionar").onclick = null
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
