let number = 10;

function add() {
    return (number += 5);
}

function subtract() {
    return (number -= 6);
}

function multiply() {
    return (number *= 4);
}

function divide() {
    return (number /= 2);
}

function add(a,b) {
    return (a+b);
}

function subtract(a,b) {
    return (a-b);
}

function multiply(a,b) {
    return (a*b);
}

function divide(a,b) {
    return (a/b);
}

function increment(a) {
    return ++a
}

function decrement(b) {
    return --b;
}


function makeInt(string) {
   return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string, 10);
}


