
class Calculator{
    static plus(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    static minus(firstNumber, secondNumber) {     
        return firstNumber - secondNumber;
    }

    static divide(firstNumber, secondNumber) {
        if(secondNumber){        
            return firstNumber / secondNumber;
        } else {
            return 'Деление на ноль невозможно';
        }
    }

    static multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

function plus(){
    document.getElementById('result').innerHTML = Calculator.plus(Number(document.getElementById('number1').value), Number(document.getElementById('number2').value));
}

function minus(){
    document.getElementById('result').innerHTML = Calculator.minus(Number(document.getElementById('number1').value), Number(document.getElementById('number2').value));
}

function divide(){
    document.getElementById('result').innerHTML = Calculator.divide(Number(document.getElementById('number1').value), Number(document.getElementById('number2').value));
}

function multiply(){
    document.getElementById('result').innerHTML = Calculator.multiply(Number(document.getElementById('number1').value), Number(document.getElementById('number2').value));
}
