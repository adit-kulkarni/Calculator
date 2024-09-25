let constructedNumber = '';
let runningTotal = '';
let selectedNumber = '';
let numberList = [];
let display = document.querySelector('.display');
let runningDisplay = document.querySelector('.runningDisplay')
let liveOperator = '';


function addNumberButtonSelection(){
    let numberButtons = document.querySelectorAll('.number');

    numberButtons.forEach((number) => {
        number.addEventListener('click', ()=>{
            selectedNumber = number.textContent;
            if (selectedNumber === '.') {
                if (!constructedNumber.includes('.')) {
                    constructedNumber = constructedNumber.concat(selectedNumber.toString());
                }
            } else {
                constructedNumber = constructedNumber.concat(selectedNumber.toString());
            }

            display.textContent = constructedNumber;
            

        });
    });
}


function addOperatorButtons(){
    let operatorButtons = document.querySelectorAll('.operator');

    operatorButtons.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (constructedNumber !== '') {
                numberList.push(constructedNumber);   
            }
            console.log(numberList);

            if (numberList.length == 2){
                runningTotal = operate(liveOperator, Number(numberList[0]), Number(numberList[1]))
                numberList = [runningTotal];
                runningDisplay.textContent = runningTotal;

            }
            else if (numberList.length == 1) {
                runningTotal = numberList[0];
                runningDisplay.textContent = runningTotal;
            }
            else {
                runningDisplay.textContent = constructedNumber;
            }
            constructedNumber = ''; //reset constructed number after operator clicked
            display.textContent = constructedNumber;
            liveOperator = operator.textContent;

        })
    })

}

function addCalculationButton(){
    let calculationButton = document.querySelector('.calculate');
    calculationButton.addEventListener('click', () => {
        display.textContent = runningTotal;
    })
}

function addClearButton(){
    let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {
        constructedNumber = '';
        runningTotal = '';
        selectedNumber = '';
        numberList = [];
        liveOperator = '';

        display.textContent = constructedNumber;
        runningDisplay.textContent = runningTotal;
    });
}





function spinItUp(){
    addNumberButtonSelection()
    addOperatorButtons()
    addCalculationButton()
    addClearButton()
}

function operate(operator, num1, num2) {
    let result;

    switch (operator) {
        case '':
            result = num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '−':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':  
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            throw new Error('Invalid operator');
    }

    return parseFloat(result.toFixed(4));
}


spinItUp()