// addition function
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

// substract
function substract(firstNum, secondNum) {
    return firstNum - secondNum;
}

// multiply
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

// division
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

// operate function
function operate(operator, firstNum, secondNum) {
    if (operator == "+") {
        return add(firstNum, secondNum);
    }
    if (operator == "-") {
        return substract(firstNum, secondNum);
    }
    if (operator == "*") {
        return multiply(firstNum, secondNum);
    }
    if (operator == "/") {
        if (b == 0) {
            return "div by zero";
        }
        else {
            return add(firstNum, secondNum);
        }
    }
}
